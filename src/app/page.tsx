import CallToActionButton from "@/components/website/CallToActionButton";
import Hero from "@/components/website/Hero";
import Navbar from "@/components/website/Navbar";
import SplitButtonLeft from "@/components/website/SplitButtonLeft";
import SplitImageLeft from "@/components/website/SplitImageLeft";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CallToActionButton />
      <SplitImageLeft />
      <SplitButtonLeft />
    </main>
  );
}
