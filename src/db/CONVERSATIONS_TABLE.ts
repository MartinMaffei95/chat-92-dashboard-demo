import { Conversation } from "../models/Conversation.interface";

export const CONVERSATIONS_TABLE: Conversation[] = [
  {
    id: "1",
    init_by_user: true,
    expired: true,
    messages: [],
  },
  {
    id: "2",
    init_by_user: true,
    expired: false,
    messages: [],
  },
  {
    id: "3",
    init_by_user: false,
    expired: true,
    messages: [],
  },
];
