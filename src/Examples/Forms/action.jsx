import "./styles.css";
function Actions() {
  const submitData = async (userData) => {
    const newUser = {
      name: userData.get("name"),
      email: userData.get("email"),
    };
    console.log("newUser", newUser);
  };

  return (
    <div className='form-container'>
      <form action={submitData}>
        <label for='name'>Name</label>
        <br />
        <input type='text' id='name' placeholder='Name' name='name' />
        <br />
        <label for='email'>Email</label>
        <br />
        <input type='email' id='email' placeholder='Email' name='email' />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Actions;
