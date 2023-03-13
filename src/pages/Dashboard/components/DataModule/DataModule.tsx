export type DataModuleType = {
  label: string;
  quantity: number;
  sxContainer?: string;
  sxNumber?: string;
  sxLabel?: string;
};
export const DataModule = ({
  label,
  quantity,
  sxContainer = '',
  sxNumber = '',
  sxLabel = '',
}: DataModuleType) => {
  return (
    <div
      className={`rounded border p-2 flex flex-col justify-center items-center w-full ${sxContainer}`}
    >
      <div className={`text-6xl ${sxNumber}`}>{quantity}</div>
      <p className={`text-xl ${sxLabel}`}>{label}</p>
    </div>
  );
};
