"use client";
import { useEffect, useRef, useState } from "react";

interface SplashScreenProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  onEnter: () => void;
}

function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0) s.speed *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,208,128,${s.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

export default function SplashScreen({ audioRef, onEnter }: SplashScreenProps) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  const handleEnter = () => {
    // Start audio inside the direct tap handler — most trusted gesture on mobile
    if (audioRef.current) {
      audioRef.current.volume = 0;
      audioRef.current.play().catch(() => {});
      // Fade in volume over 1.5s so it doesn't blast the user
      let vol = 0;
      const fadeIn = setInterval(() => {
        vol = Math.min(vol + 0.04, 0.6);
        if (audioRef.current) audioRef.current.volume = vol;
        if (vol >= 0.6) clearInterval(fadeIn);
      }, 60);
    }

    // Animate out
    setLeaving(true);
    setTimeout(() => {
      setVisible(false);
      onEnter();
    }, 700);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(180deg, #020D12 0%, #0D4A5C 50%, #071A0F 100%)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
        fontFamily: "'Scheherazade New', Georgia, serif",
        overflow: "hidden",
      }}
      onClick={handleEnter}
    >
      <StarField />

      {/* Geometric ring ornament */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Cg fill='%23C9A84C' fill-opacity='0.04'%3E%3Cpath d='M40 0L50 20L40 40L30 20zM0 40L20 30L40 40L20 50zM80 40L60 30L40 40L60 50zM40 80L50 60L40 40L30 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }}
      />

      {/* Glowing orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(26,107,71,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 32px",
          maxWidth: "480px",
          width: "100%",
        }}
      >
        {/* Crescent + Star */}
        <div
          style={{
            marginBottom: "24px",
            animation: "floatY 4s ease-in-out infinite",
          }}
        >
          <svg
            viewBox="0 0 80 80"
            width="72"
            height="72"
            style={{ display: "inline-block" }}
          >
            {/* Crescent */}
            <path
              d="M40 8 C22 8 8 22 8 40 C8 58 22 72 40 72 C50 72 59 67 65 59 C59 61 52 62 45 60 C29 55 19 41 22 26 C25 14 31 8 40 8Z"
              fill="#F0D080"
              opacity="0.9"
            />
            {/* Star */}
            <polygon
              points="68,14 70,20 76,20 71,24 73,30 68,26 63,30 65,24 60,20 66,20"
              fill="#F0D080"
              opacity="0.85"
            />
          </svg>
        </div>

        {/* Arabic Takbir */}
        <div
          style={{
            fontSize: "clamp(18px, 5vw, 26px)",
            color: "#F0D080",
            marginBottom: "8px",
            letterSpacing: "1px",
            lineHeight: 1.4,
            textShadow: "0 0 40px rgba(201,168,76,0.4)",
          }}
        >
          تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
        </div>
        <div
          style={{
            fontSize: "clamp(13px, 3vw, 16px)",
            color: "rgba(232,213,163,0.5)",
            marginBottom: "32px",
            fontStyle: "italic",
          }}
        >
          Taqabbalallahu Minna wa Minkum
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
            marginBottom: "32px",
          }}
        />

        {/* Main title */}
        <h1
          className="font-['Cinzel_Decorative']"
          style={{
            fontSize: "clamp(32px, 9vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.05,
            marginBottom: "12px",
            background:
              "linear-gradient(180deg, #F0D080 0%, #C9A84C 60%, #8B6914 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Wagrim Family
          <br />
          Halalbihalal
        </h1>

        <div
          style={{
            fontSize: "clamp(13px, 3.5vw, 17px)",
            color: "rgba(232,213,163,0.65)",
            marginBottom: "8px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 700,
          }}
        >
          Eid Al-Fitr 1447 H · 2026
        </div>

        <div
          style={{
            fontSize: "clamp(12px, 3vw, 15px)",
            color: "rgba(232,213,163,0.4)",
            marginBottom: "48px",
            fontStyle: "italic",
          }}
        >
          Minal Aidin Wal Faizin 🌙
        </div>

        {/* CTA button */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(135deg, #C9A84C, #F0D080)",
            borderRadius: "50px",
            padding: "clamp(12px, 3vw, 16px) clamp(28px, 6vw, 48px)",
            color: "#1C1208",
            fontFamily: "'Lato', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(13px, 3.5vw, 16px)",
            letterSpacing: "1px",
            textTransform: "uppercase",
            boxShadow: "0 4px 32px rgba(201,168,76,0.45)",
            animation: "pulse 2s ease-in-out infinite",
          }}
        >
          {/* Play icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1C1208">
            <path d="M8 5v14l11-7z" />
          </svg>
          Tap to Enter
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 32px rgba(201,168,76,0.45); }
          50%       { box-shadow: 0 4px 48px rgba(201,168,76,0.75); }
        }
      `}</style>
    </div>
  );
}
