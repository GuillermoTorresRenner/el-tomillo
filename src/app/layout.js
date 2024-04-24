import { Merriweather, Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FabNavigation from "@/components/FabNavigation";

const merryweather = Merriweather({
  subsets: ["latin"],
  weight: ["700", "400"],
  variable: "--merryweather",
});
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["700", "600", "400"],
  variable: "--urbanist",
});

export const metadata = {
  title: "El Tomillo Espacio Agrourbano",
  description: "El Tomillo Espacio Agrourbano",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${merryweather.variable} ${urbanist.variable}`}>
        <Navbar />
        {children}
        <FabNavigation />
        <Footer />
      </body>

      <script defer="" src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon="{'token': '783d6bd8aeed4644afcd0266c25e069f'}"></script>

    </html>
  );
}
