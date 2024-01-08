"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./app";
// Create a client
const queryClient = new QueryClient();

function Page() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default Page;
