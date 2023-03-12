import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Dashboard/components/Dashboard/Dashboard";
import Login from "./Login/components/Login";

const AppRoutes = () => {
  const RequireAuth = ({ children }: { children: JSX.Element }) => {
    if (!localStorage.getItem("token")) {
      return (
        <Navigate
          to="/login"
          replace={true}
        />
      );
    }
    return children;
  };

  //   const RedirectHome = ({ children }) => {
  //     const user = useSelector(
  //       (state) => state?.userReducer?.buildings?.myUserInformation
  //     );
  //     if (user?.buildings > 0) {
  //       return <Navigate to="/bookings/create" />;
  //     }
  //     return children;
  //   };

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
