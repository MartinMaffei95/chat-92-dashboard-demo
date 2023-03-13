import { useState, useEffect } from 'react';
import { CONVERSATIONS_TABLE, MESSAGE_TABLE } from '../../../../db';
import { Message, Conversation } from '../../../../models';
import { getMessages } from '../../../../services/getMessages';
import { DataModule } from '../DataModule/DataModule';
import DataModuleContainer from '../DataModule/DataModuleContainer';
import { MessageComp } from '../Message/Message';

const Dashboard = () => {
  const [messages, setMessages] = useState<Message[] | void>(MESSAGE_TABLE);
  const [conversations, setConversations] =
    useState<Conversation[]>(CONVERSATIONS_TABLE);

  const [actives, setActives] = useState<number>(0);

  const expiredConversations = (conversations: Conversation[]) => {
    let actives = 0;
    for (const c of conversations) {
      c.expired === false && actives++;
    }
    return actives;
  };
  useEffect(() => {
    getMessages().then((res) => setMessages(res));
    setActives(expiredConversations(conversations));
  }, []);

  return (
    <div className="flex gap-4 ">
      <div className="w-full flex flex-col gap-4 justify-center">
        <DataModuleContainer sectionName="Conversaciones">
          <DataModule label="Total" quantity={conversations.length} />
          <DataModule label="Activas" quantity={actives} />
        </DataModuleContainer>

        <DataModuleContainer sectionName="Conversaciones">
          <DataModule label="Total" quantity={conversations.length} />
          <DataModule label="Activas" quantity={actives} />
        </DataModuleContainer>
        <DataModuleContainer sectionName="Mensajes">
          <DataModule label="Total" quantity={messages?.length || 0} />
        </DataModuleContainer>
      </div>
      <div className="h-[90vh] w-[70vw] overflow-y-scroll rounded">
        {messages?.map((m) => (
          <MessageComp id={m.id} body={m.body} date={m.date} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
