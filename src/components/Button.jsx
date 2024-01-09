export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-700 text-stone-300 hover:bg-stone-800 hover:text-stone-50 px-2 py-1 rounded-lg mt-5"
      {...props}
    >
      {children}
    </button>
  );
}
