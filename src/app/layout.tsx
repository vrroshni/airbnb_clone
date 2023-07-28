import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/modal/RegisterModal";
import ToastProvider from "./providers/ToastProvider";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone done by Roshni V R",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToastProvider />
          <RegisterModal />
          <Navbar />
          {children}


        </ClientOnly>
      </body>
    </html>
  );
}
