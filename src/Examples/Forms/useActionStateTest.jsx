import { useActionState } from "react";

import "./styles.css";
function UseActionStateTest() {
  const submitData = async (prevData, formData) => {
    const name = formData.get("name");
    const error = "Please enter correct Username";
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (error) {
      return {
        name: prevData.name,
        error,
      };
    }
    return {
      name,
      error: null,
    };
  };

  const [state, formAction, pending] = useActionState(submitData, { error: null, name: "" });

  return (
    <div className='form-container'>
      <form action={formAction}>
        <label for='name'>Name</label>
        <br />
        <input type='text' id='name' placeholder='Name' name='name' />
        <br />
        <label for='email'>Email</label>
        <br />
        <input type='email' id='email' placeholder='Email' name='email' />
        <br />

        <button>{pending ? "Submiting..." : "Submit"} </button>
      </form>

      {!!state.error && <div className='error'>Error: {state.error}</div>}
      {!state.error && state.name && <div className='message'>Name is {state.name}</div>}
    </div>
  );
}

export default UseActionStateTest;
