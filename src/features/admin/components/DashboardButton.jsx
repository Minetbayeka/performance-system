export function Button({ title, icon, lg, ...props }) {
  return (
    <button
      className={`fill-none hover:bg-primary text-black border flex gap-2 items-center ${
        lg ? "p-3 rounded-lg" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
        {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}