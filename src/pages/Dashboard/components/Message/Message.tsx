import { timeAgo } from '../../utilities/toUnix';

export type MessageCType = {
  id: number;
  body: string;
  date: number;
  actions?: [];
};

export const MessageComp = ({ id, body, date, actions = null }: any) => {
  return (
    <div className="flex gap-2 bg-slate-100 text-black p-2">
      <p>{id}</p>
      <p>{body}</p>
      <span className="text-sm">{timeAgo(date)}</span>
    </div>
  );
};
