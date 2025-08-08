import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play, Pause, Volume2, VolumeX, Rewind, FastForward } from "lucide-react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

const formatTime = (seconds: number) => {
  if (!isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => setDuration(video.duration || 0);
    const onTimeUpdate = () => setCurrentTime(video.currentTime || 0);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("loadedmetadata", onLoaded);
      video.removeEventListener("timeupdate", onTimeUpdate);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleSeek = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    const t = value[0];
    video.currentTime = t;
    setCurrentTime(t);
  };

  const handleVolume = (value: number[]) => {
    const video = videoRef.current;
    if (!video) return;
    const v = value[0];
    video.volume = v;
    setVolume(v);
    if (v > 0 && isMuted) {
      video.muted = false;
      setIsMuted(false);
    }
  };

  const seekBy = (delta: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(0, Math.min((video.currentTime || 0) + delta, duration));
  };

  return (
    <article className="rounded-2xl border border-border bg-card shadow-card">
      <header className="sr-only">
        <h3>{title || "Intro video"}</h3>
      </header>
      <AspectRatio ratio={16 / 9}>
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          preload="metadata"
          aria-label={title || "Intro video"}
        />
      </AspectRatio>
      <div className="p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => seekBy(-10)} aria-label="Rewind 10 seconds">
            <Rewind className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => seekBy(10)} aria-label="Forward 10 seconds">
            <FastForward className="h-4 w-4" />
          </Button>
          <div className="mx-2 flex-1 flex items-center gap-2">
            <span className="text-xs tabular-nums text-muted-foreground w-12 text-right">
              {formatTime(currentTime)}
            </span>
            <Slider
              value={[Math.min(currentTime, duration)]}
              min={0}
              max={Math.max(duration, 0.1)}
              step={0.1}
              onValueChange={handleSeek}
              aria-label="Seek"
              className="flex-1"
            />
            <span className="text-xs tabular-nums text-muted-foreground w-12">
              {formatTime(duration)}
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          <div className="w-24">
            <Slider value={[volume]} min={0} max={1} step={0.01} onValueChange={handleVolume} aria-label="Volume" />
          </div>
        </div>
      </div>
    </article>
  );
}
