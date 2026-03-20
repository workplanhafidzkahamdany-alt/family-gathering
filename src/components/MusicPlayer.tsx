"use client";
import { useEffect, useRef, useState, useCallback } from "react";

interface MusicPlayerProps {
  src: string;
  title?: string;
}

export default function MusicPlayer({
  src,
  title = "Eid Nasheed",
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [collapsed, setCollapsed] = useState(true);
  const [muted, setMuted] = useState(false);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  }, [playing]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    // ── autoplay on first user interaction ──
    const tryAutoplay = () => {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
      window.removeEventListener("click", tryAutoplay);
      window.removeEventListener("scroll", tryAutoplay);
      window.removeEventListener("keydown", tryAutoplay);
      window.removeEventListener("touchstart", tryAutoplay);
    };

    window.addEventListener("click", tryAutoplay, { once: true });
    window.addEventListener("scroll", tryAutoplay, { once: true });
    window.addEventListener("keydown", tryAutoplay, { once: true });
    window.addEventListener("touchstart", tryAutoplay, { once: true });

    const onTimeUpdate = () => {
      if (audio.duration) setProgress(audio.currentTime / audio.duration);
    };
    const onLoaded = () => setDuration(audio.duration);
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [volume]);

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = parseFloat(e.target.value);
    setVolume(v);
    if (audioRef.current) {
      audioRef.current.volume = v;
      audioRef.current.muted = false;
      setMuted(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const t = parseFloat(e.target.value) * audio.duration;
    audio.currentTime = t;
    setProgress(parseFloat(e.target.value));
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  const formatTime = (s: number) => {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="metadata" />

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 9999,
          fontFamily: "'Lato', sans-serif",
          transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {collapsed ? (
          /* ── Collapsed pill ── */
          <button
            onClick={() => setCollapsed(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "linear-gradient(135deg, #0D4A5C, #1C1208)",
              border: "1px solid rgba(201,168,76,0.5)",
              borderRadius: "50px",
              padding: "10px 16px",
              cursor: "pointer",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,168,76,0.1)",
              color: "#F0D080",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
              <path d="M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9z" />
            </svg>
            {playing ? (
              <span
                style={{ display: "flex", gap: "2px", alignItems: "center" }}
              >
                {[0, 0.15, 0.3].map((d, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block",
                      width: "3px",
                      borderRadius: "2px",
                      background: "#C9A84C",
                      animation: `barBounce 0.8s ease-in-out ${d}s infinite alternate`,
                      height: "12px",
                    }}
                  />
                ))}
              </span>
            ) : (
              <span style={{ color: "#E8D5A3", fontSize: "11px" }}>Paused</span>
            )}
          </button>
        ) : (
          /* ── Expanded player ── */
          <div
            style={{
              background: "linear-gradient(160deg, #0D4A5C 0%, #1C1208 100%)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "20px",
              padding: "16px",
              width: "280px",
              boxSizing:
                "border-box" /* ensures padding is included in width */,
              overflow: "hidden" /* hard clip — nothing can bleed out */,
              boxShadow:
                "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(201,168,76,0.08)",
            }}
          >
            {/* Top row: icon + title + collapse */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#C9A84C">
                  <path d="M9 3v10.55A4 4 0 1 0 11 17V7h4V3H9z" />
                </svg>
              </div>

              {/* Marquee title — needs minWidth:0 to respect flex shrinking */}
              <div style={{ flex: 1, overflow: "hidden", minWidth: 0 }}>
                <div
                  style={{
                    fontSize: "10px",
                    color: "rgba(232,213,163,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    marginBottom: "2px",
                  }}
                >
                  Now Playing
                </div>
                <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
                  <span
                    style={{
                      display: "inline-block",
                      color: "#F0D080",
                      fontSize: "13px",
                      fontWeight: "700",
                      animation: playing
                        ? "marquee 8s linear infinite"
                        : "none",
                      paddingRight: "32px",
                    }}
                  >
                    {title}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setCollapsed(true)}
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "none",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  color: "rgba(232,213,163,0.5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "14px",
                  lineHeight: 1,
                }}
              >
                ╌
              </button>
            </div>

            {/* Gold divider */}
            <div
              style={{
                height: "1px",
                background:
                  "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
                marginBottom: "14px",
              }}
            />

            {/* Progress bar */}
            <div style={{ marginBottom: "12px" }}>
              <input
                type="range"
                min="0"
                max="1"
                step="0.001"
                value={progress}
                onChange={handleSeek}
                style={{
                  width: "100%",
                  accentColor: "#C9A84C",
                  cursor: "pointer",
                  display: "block",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "4px",
                }}
              >
                <span
                  style={{ fontSize: "10px", color: "rgba(232,213,163,0.4)" }}
                >
                  {formatTime(progress * duration)}
                </span>
                <span
                  style={{ fontSize: "10px", color: "rgba(232,213,163,0.4)" }}
                >
                  {formatTime(duration)}
                </span>
              </div>
            </div>

            {/* Controls row — key fix: minWidth:0 on volume wrapper, explicit width on slider */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* Play / Pause — fixed size, never shrinks */}
              <button
                onClick={toggle}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #C9A84C, #F0D080)",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 12px rgba(201,168,76,0.4)",
                  flexShrink: 0,
                  transition: "transform 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.08)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {playing ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1C1208"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#1C1208"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Volume: mute icon + slider — flex:1 + minWidth:0 prevents overflow */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0 /* critical: allows flex child to shrink below content size */,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <button
                  onClick={toggleMute}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px",
                    color: muted ? "rgba(232,213,163,0.3)" : "#C9A84C",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {muted || volume === 0 ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18l2 2L21 18.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                  )}
                </button>

                {/* width:100% + minWidth:0 makes the slider fill remaining space only */}
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={muted ? 0 : volume}
                  onChange={handleVolume}
                  style={{
                    width: "100%",
                    minWidth: 0,
                    accentColor: "#C9A84C",
                    cursor: "pointer",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Visualizer bars */}
            {playing && (
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  gap: "3px",
                  height: "20px",
                  marginTop: "12px",
                }}
              >
                {[0, 0.1, 0.2, 0.05, 0.15, 0.25, 0.08, 0.18, 0.12, 0.22].map(
                  (delay, i) => (
                    <div
                      key={i}
                      style={{
                        width: "3px",
                        borderRadius: "2px",
                        background: `rgba(201,168,76,${0.4 + (i % 3) * 0.2})`,
                        animation: `barBounce 0.7s ease-in-out ${delay}s infinite alternate`,
                        height: `${8 + (i % 4) * 4}px`,
                      }}
                    />
                  ),
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes barBounce {
          0%   { transform: scaleY(0.4); }
          100% { transform: scaleY(1.2); }
        }
      `}</style>
    </>
  );
}
