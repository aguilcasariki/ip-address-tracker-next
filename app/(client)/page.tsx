"use client";
import dynamic from "next/dynamic";

const App = dynamic(() => import("./app"), {
  ssr: false,
});

function Page() {
  return <App />;
}

export default Page;
