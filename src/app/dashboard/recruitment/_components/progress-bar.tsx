export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="mb-6 h-2 w-full bg-gray-200">
      <div
        className="h-2 bg-yellow-500"
        style={{ width: `${progress * 10}%` }}
      ></div>
    </div>
  );
}
