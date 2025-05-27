export function Buttons({ title, lg, ...props }) {
  return (
    <button
      className={`bg-green-100 text-green-800  font-semibold   ${
        lg ? "px-2.5 rounded" : "py-0.5  "
      } text-xs`}
      {...props}
    >
      {title}
    </button>
  );
}