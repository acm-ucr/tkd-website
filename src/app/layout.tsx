import "./globals.css";
import { Inika, Caveat_Brush, Jockey_One } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inika = Inika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const caveat_brush = Caveat_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-caveat-brush",
});

const jockey_one = Jockey_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jockey-one",
});

export const metadata = {
  title: "Taekwondo Club @ UCR",
  description:
    "Taekwondo @ UCR offers students the opportunity to develop their martial arts skills, learn more about the culture of taekwondo, engage in a supportive, community-oriented environment, while also providing chances to participate in Taekwondo events and competitions.",
  icons: {
    icon: "/favicon.ico",
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`h-screen bg-tkd-blue-300 ${inika.className} ${caveat_brush.variable} ${jockey_one.variable}`}
      >
        <ReactQueryClientProvider>
          <Navbar />
          <div className="m-24 max-md:m-16" />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

// commit to deploy comment
