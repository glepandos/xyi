"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "https://videos.pexels.com/video-files/33596420/33596420-hd_1080_1920_30fps.mp4";

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [soundOn, setSoundOn] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("fresh-auto-intro-seen");
    if (seen) {
      setVisible(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("fresh-auto-intro-seen", "1");
    }, 12000);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    sessionStorage.setItem("fresh-auto-intro-seen", "1");
    setVisible(false);
  };

  const enableSound = async () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 0.8;
    try {
      await video.play();
      setSoundOn(true);
    } catch {
      video.muted = true;
      setSoundOn(false);
    }
  };

  return (
    <div className="intro-screen" role="dialog" aria-label="Fresh Auto">
      <video ref={videoRef} className="intro-video" autoPlay muted playsInline preload="auto" onError={dismiss}>
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
      <div className="intro-actions">
        <button className="intro-sound" onClick={enableSound}>{soundOn ? "ЗВУК ВКЛЮЧЁН" : "ВКЛЮЧИТЬ ЗВУК 🔊"}</button>
        <button className="intro-skip" onClick={dismiss}>ПРОПУСТИТЬ ↗</button>
      </div>
    </div>
  );
}
