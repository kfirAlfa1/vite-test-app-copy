import Counter from "@/components/Counter";

const App = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-lg">
        <h1 className="mb-2 text-2xl font-bold text-slate-900">Vite Test App</h1>
        <p className="mb-8 text-slate-500">React + TypeScript + Tailwind, built with Vite.</p>
        <div className="mb-8 grid grid-cols-2 gap-3">
          {["Button 1", "Button 2", "Button 3", "Button 4"].map((label) => (
            <button
              key={label}
              type="button"
              className="rounded-lg border border-slate-900 px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100"
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex justify-center">
          <Counter />
        </div>
      </div>
    </main>
  );
};

export default App;
