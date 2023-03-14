import { userFromApi } from '../../../adapters';
import { User } from '../../../models';

const { VITE_APP_API_URI } = import.meta.env;

export const login = async (): Promise<User | void> => {
  try {
    const res = await fetch(`${VITE_APP_API_URI}/**INSERT LOGIN EP**`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ a: 1, b: 'Textual content' }),
    });
    const data = await res.json();
    return userFromApi(data);
  } catch (error) {
    console.log(error);
    return;
  }
};
