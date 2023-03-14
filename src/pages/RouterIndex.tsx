import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './Dashboard/DashboardLayout';
import LoginLayout from './Login/LoginLayout';

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
              <DashboardLayout />
            </RequireAuth>
          }
        />

        {/* ## Login page ## */}
        <Route
          path="/login"
          element={
            <>
              <LoginLayout />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
