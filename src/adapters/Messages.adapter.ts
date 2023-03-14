import { EndpointMessage, Message } from '../models';

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
