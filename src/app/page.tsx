import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import RundownSection from "@/components/RundownSection";
import GamesSection from "@/components/GamesSection";
import TeamSection from "@/components/TeamSection";
import EquipmentSection from "@/components/EquipmentSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

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
      <MusicPlayer
        src="/music/Maher_Zain_-_Salla_Alayka_Rahman.mp3"
        title="Salla Alayka Rahman 🌙"
      />
    </main>
  );
}
