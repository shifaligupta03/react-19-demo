import { Suspense } from "react";
import BasicCounter from "./Examples/BasicCounter";
// import CounterWithSortList from "./Examples/CounterWithSortList";
// import UsersExample from './Examples/Users';
// import ThemeExample from './Examples/Theme';

function App() {

  return (
    <>
     <h1>React 19 Examples</h1>
    <div>
      <Suspense
        fallback={
          <h1 className="loadingStyle">Loading...</h1>
        }
      >
        <BasicCounter />
        {/* <CounterWithSortList /> */}
        {/* <Users /> */}
        {/* <ThemeExample /> */}
      </Suspense>
    </div>
  </>
  )


}

export default App;