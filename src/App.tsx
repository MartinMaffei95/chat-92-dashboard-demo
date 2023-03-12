import "./App.css";
import Dashboard from "./pages/Dashboard/components/Dashboard/Dashboard";
import AppRoutes from "./pages/RouterIndex";
import { getMessages } from "./services/getMessages";

export const App = () => {
  return <AppRoutes />;
};

export default App;
