import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  PROJECT_CHARACTER_COUNTER,
  PROJECT_SHUFFLE_AND_GROUPING,
} from "~/constants/common";
import CharacterCounter from "~/pages/CharacterCounter";
import Home from "~/pages/Home";
import ShuffleAndGrouping from "~/pages/ShuffleAndGrouping";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route
          path={PROJECT_CHARACTER_COUNTER.path}
          element={<CharacterCounter />}
        />
        <Route
          path={PROJECT_SHUFFLE_AND_GROUPING.path}
          element={<ShuffleAndGrouping />}
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
