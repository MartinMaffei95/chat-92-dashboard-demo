import { Message, EndpointMessage } from "../models/Messages.interface";

export const crateAddaptedMessage = (msg: EndpointMessage) => {
  const addaptedMsg: Message = {
    id: msg.id,
    body: msg.body,
    source: msg.source,
    actions: msg.actions || null,
    date: msg.date,
    type: msg.type,
  };
  return addaptedMsg;
};
