import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import RundownSection from "@/components/RundownSection";
import GamesSection from "@/components/GamesSection";
import TeamSection from "@/components/TeamSection";
import EquipmentSection from "@/components/EquipmentSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <InfoSection /> */}
      <RundownSection />
      <GamesSection />
      {/* <TeamSection />
      <EquipmentSection /> */}
      <Footer />
    </main>
  );
}
