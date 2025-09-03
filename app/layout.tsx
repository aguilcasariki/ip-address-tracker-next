import AppContextProvider from "./context/AppContext";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Ip Address Tracker",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
