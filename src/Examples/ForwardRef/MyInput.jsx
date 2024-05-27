/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import { forwardRef } from "react";

// const MyInput = forwardRef((props, ref) => <input {...props} ref={ref} />);

function MyInput({ ref, ...props }) {
  return <input {...props} ref={ref} />;
}

export default MyInput;

// React 19 introduces significant changes to the forwardRef API,
// making it more streamlined and easier to use. Previously,
// forwardRef was used to forward refs to child components,
// enabling parent components to interact directly with DOM elements or other components' instances.
// In React 19, this pattern has been simplified, and ref forwarding is handled more intuitively.

// export default MyInput;
