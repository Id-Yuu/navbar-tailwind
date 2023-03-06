import { Outlet } from "react-router-dom";

// Component
import { Navbars } from "../Components/Navbars";

export const Root = () => {
  return (
    <>
      <div className="min-h-screen mx-auto max-w-3xl p-5 bg-slate-50">
        <Navbars />
        <div className="p-5 my-5 flex justify-center align-middle items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};
