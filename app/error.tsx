"use client"; // Error boundaries must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h2 className="text-2xl">
        Something went wrong! Please check your internet connection.
      </h2>
    </div>
  );
}
