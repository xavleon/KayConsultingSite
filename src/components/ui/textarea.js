export function Textarea({ placeholder, ...props }) {
  return (
    <textarea
      placeholder={placeholder}
      className="border rounded-md p-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
