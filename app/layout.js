import AuthProvider from "@/context/AuthContext";
import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix",
  description: "A movie platform to stream on demand movies",
  keys: "movies, netflix, latest-movies, action, horror",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar/>
          {children}

          <ToastContainer />
        </AuthProvider>
      </body>
    </html>
  );
}
