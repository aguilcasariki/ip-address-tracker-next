"use client";
import dynamic from "next/dynamic";
import { QueryClient, QueryClientProvider } from "react-query";
const App = dynamic(() => import("./app"), {
  ssr: false,
});
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
