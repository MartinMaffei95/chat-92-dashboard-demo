import { Message } from "./Messages.interface";

export interface Conversation {
  id: string;
  init_by_user: boolean;
  expired: boolean;
  messages: Message[];
}
