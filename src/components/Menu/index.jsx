export function Menu() {
  return (
    <div className="flex justify-between items-center px-2 py-4">
      <h2 className="text-white">Project Films</h2>
      <input
        type="text"
        placeholder="Search"
        className="py-1 px-1 outline-none rounded"
      />
    </div>
  );
}
