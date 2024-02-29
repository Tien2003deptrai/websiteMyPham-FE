import ProjectRoutes from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ProjectRoutes />
      <ToastContainer />
    </>
  );
}

export default App;
