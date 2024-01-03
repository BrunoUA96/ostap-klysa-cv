export const ResponsabilityList = ({
  responsabilityList,
}: {
  responsabilityList?: string[];
}) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {responsabilityList?.map((res, index) => (
        <span
          key={index}
          className="bg-sky-300/75 dark:bg-sky-400/50 px-3 py-1 rounded-full text-xs text-slate-900 dark:text-slate-200 flex items-center justify-center transition-colors">
          {res.replace("_", " ")}
        </span>
      ))}
    </div>
  );
};
