import { Message } from './Messages.model';

export interface Conversation {
  id: string;
  init_by_user: boolean;
  expired: boolean;
  messages: Message[];
}
