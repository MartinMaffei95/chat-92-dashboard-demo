import { Provider } from 'react-redux';
import { store } from './store';

export type StateProviderType = {
  children: JSX.Element | JSX.Element[];
};

const StateProvider = ({ children }: StateProviderType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
