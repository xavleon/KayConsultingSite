export function Input({ type = "text", placeholder, ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="h-12 w-full rounded-xl border border-stone-200 bg-white px-3 text-ink outline-none focus:ring-2 focus:ring-pine"
      {...props}
    />
  );
}
