export function Button({ title, icon, lg, ...props }) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 ${
        lg ? "p-3 rounded-lg" : "p-[0.25rem] "
      } text-sm`}
      {...props}
    >
        {icon && <span>{icon}</span>}
      {title}
    </button>
  );
}

