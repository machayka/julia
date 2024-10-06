export default function Button({
  text,
  ghost = false,
}: {
  text: string;
  ghost?: boolean;
}) {
  return (
    <button className="relative m-4 w-40 text-lg font-medium inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <div
        className={`absolute inset-[-1000%] ${
          ghost
            ? "bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
            : "animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        }`}
      />
      <div
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full  ${
          ghost
            ? "bg-gray-950"
            : "bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-purple-500/50"
        } px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl `}
      >
        {text}
      </div>
    </button>
  );
}
