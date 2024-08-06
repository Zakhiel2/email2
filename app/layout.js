import Preloader from "@/layouts/Preloader";
import "@css/animate.css";
import "@css/basic.css";
import "@css/layout.css";
import "@css/ionicons.css";
import "@css/magnific-popup.css";
import "@css/template-colors/blue.css";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import State from "/context/context";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});
export const metadata = {
  title: "Logan BOVET",
  description: "Logan BOVET - CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={robotoMono.variable}>
        {/* Preloader */}
        <Preloader />
        <State>{children} </State>
      </body>
    </html>
  );
}
