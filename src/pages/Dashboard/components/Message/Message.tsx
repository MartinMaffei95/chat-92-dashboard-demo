import { timeAgo } from '../../utilities/toUnix';

export type MessageCType = {
  id: number;
  body: string;
  date: number;
  actions?: [];
};

export const MessageComp = ({ id, body, date, actions = null }: any) => {
  return (
    <div className="flex flex-col gap-2 bg-slate-100 text-black p-2 border-y border-y-slate-600">
      <p>{id}</p>
      <div className="flex justify-between">
        <p>{body}</p>
        <span className="text-xs">{timeAgo(date)}</span>
      </div>
    </div>
  );
};
