import { Message } from "../models";

const { VITE_APP_API_URI } = import.meta.env;
export const getMessages = async (): Promise<void> => {
  try {
    const res = await fetch(`${VITE_APP_API_URI}/messages/obtain`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
