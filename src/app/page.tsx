"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import RundownSection from "@/components/RundownSection";
import GamesSection from "@/components/GamesSection";
import TeamSection from "@/components/TeamSection";
import EquipmentSection from "@/components/EquipmentSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen audioRef={audioRef} onEnter={() => setSplashDone(true)} />

      {splashDone && (
        <main>
          <Navbar />
          <Hero />
          <InfoSection />
          <RundownSection />
          <GamesSection />
          <TeamSection />
          <EquipmentSection />
          <Footer />
          <MusicPlayer
            src="/music/Maher_Zain_-_Salla_Alayka_Rahman.mp3"
            title="Salla Alayka Rahman 🌙"
            audioRef={audioRef}
          />
        </main>
      )}
    </>
  );
}
