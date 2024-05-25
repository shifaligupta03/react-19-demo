import { Fragment } from "react";
import Action from "./action";
import UseActionStateTest from "./useActionStateTest";
import UseFormStateTest from "./useFormStatusTest";
import UseOptimisticTest from "./useOptimisticTest";

function Forms() {
  return (
    <Fragment>
      {/* <Action /> */}
      {/* <UseActionStateTest /> */}

      <UseOptimisticTest />
    </Fragment>
  );
}

export default Forms;
