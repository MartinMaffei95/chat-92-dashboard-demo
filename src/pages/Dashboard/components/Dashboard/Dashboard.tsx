import { useState, useEffect } from "react";
import { Message } from "../../../../models";
import { getMessages } from "../../../../services/getMessages";

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[] | void>([]);

  useEffect(() => {
    getMessages().then((res) => setMessages(res));
  }, []);

  return (
    <div>
      {messages?.map((m) => (
        <div>{m.body}</div>
      ))}
    </div>
  );
};

export default Dashboard;
