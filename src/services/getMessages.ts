import { crateAddaptedMessage } from '../adapters/Messages.adapter';
import { Message } from '../models';

const { VITE_APP_API_URI } = import.meta.env;
export const getMessages = async (): Promise<Message | void> => {
  try {
    const res = await fetch(`${VITE_APP_API_URI}/messages/obtain`);
    const data = await res.json();
    // adapting the response
    return crateAddaptedMessage(data);
  } catch (error) {
    console.log(error);
    return;
  }
};
