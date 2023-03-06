import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import { Root } from "./Layout/Root";

// Pages
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Faq } from "./Pages/Faq";
import { Contact } from "./Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
