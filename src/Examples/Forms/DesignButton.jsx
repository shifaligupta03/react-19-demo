import { useFormStatus } from "react-dom";

function DesignButton() {
  const { pending } = useFormStatus();

  return <button>{pending ? "Submiting..." : "Submit"} </button>;
}

export default DesignButton;
