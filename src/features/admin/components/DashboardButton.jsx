export function Button({ title, lg, ...props }) {
  return (
    <button
      className={`fill-none hover:bg-primary text-black ${
        lg ? "p-3 rounded-lg" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
      {title}
    </button>
  );
}