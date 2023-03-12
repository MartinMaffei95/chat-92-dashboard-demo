import { useState, useEffect } from "react";
import { CONVERSATIONS_TABLE } from "../../../../db/CONVERSATIONS_TABLE";
import { Message } from "../../../../models";
import { Conversation } from "../../../../models/Conversation.interface";
import { getMessages } from "../../../../services/getMessages";

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[] | void>([]);
  const [conversations, setConversations] =
    useState<Conversation[]>(CONVERSATIONS_TABLE);

  const [actives, setActives] = useState<number>(0);

  useEffect(() => {
    getMessages().then((res) => setMessages(res));
    conversations.map((c) => {
      let num = 0;
      if (c.expired === false) {
        num + 1;
        return setActives(num);
      }
    });
  }, []);

  return (
    <div>
      {messages?.map((m) => (
        <div>{m.body}</div>
      ))}
      <div>
        <div>
          <div>{actives}</div>
          <p>Activas</p>
        </div>
        <div>
          <div>{conversations.length}</div>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
