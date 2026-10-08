export function Textarea({ placeholder, ...props }) {
  return (
    <textarea
      placeholder={placeholder}
      className="h-32 w-full rounded-xl border border-stone-200 bg-white p-3 text-ink outline-none focus:ring-2 focus:ring-pine"
      {...props}
    />
  );
}
