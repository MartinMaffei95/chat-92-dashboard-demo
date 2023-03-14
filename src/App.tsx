import AppRoutes from './pages/RouterIndex';
import StateProvider from './redux/Provider';

export const App = () => {
  return (
    <StateProvider>
      <AppRoutes />
    </StateProvider>
  );
};

export default App;
