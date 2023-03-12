import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/components/Dashboard/Dashboard";
import Login from "./Login/components/Login";

const AppRoutes = () => {
  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    // if (!localStorage.getItem("token")) {
    //   return (
    //     <Navigate
    //       to="/login"
    //       replace={true}
    //     />
    //   );
    // }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* HOME ROUTE */}
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />

        {/* ## Login page ## */}
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
