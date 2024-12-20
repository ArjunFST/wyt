import "./globals.css";
import { Sora, Inter, Playfair_Display } from "next/font/google";
import InnovationsCard from "./components/innovation/InnovationsCard";
import Events from './components/Events/Events'
import CoursesSection from "./components/courses/CoursesSection";
import Testimonial from "./components/testimonial/Testimonial";
import Gallery from "./components/gallery/Gallery";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export default function Home() {
  return (
    <>
      <InnovationsCard />
      <CoursesSection />
      <Events/>
      <Testimonial />
      <Gallery />
    </>
  );
}
