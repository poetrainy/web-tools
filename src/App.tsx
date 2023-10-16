import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CharacterCounter from "~/pages/CharacterCounter";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CharacterCounter />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
