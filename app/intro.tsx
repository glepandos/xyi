"use client";

import { useEffect, useState } from "react";

const VIDEO_SRC = "https://videos.pexels.com/video-files/33596420/33596420-hd_1080_1920_30fps.mp4";

export default function Intro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("fresh-auto-intro-seen");
    if (seen) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("fresh-auto-intro-seen", "1");
    }, 8200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem("fresh-auto-intro-seen", "1");
    setVisible(false);
  };

  return (
    <div className="intro-screen" role="dialog" aria-label="Fresh Auto">
      <video className="intro-video" autoPlay muted playsInline preload="auto" onEnded={dismiss}>
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
      <div className="intro-shade" />
      <div className="intro-brand">
        <span className="intro-kicker">DRIVE THE DIFFERENCE</span>
        <div>FRESH <i>AUTO</i></div>
        <span className="intro-line" />
      </div>
      <div className="intro-panel intro-panel-top" />
      <div className="intro-panel intro-panel-bottom" />
      <button className="intro-skip" onClick={dismiss}>ПРОПУСТИТЬ ↗</button>
    </div>
  );
}
