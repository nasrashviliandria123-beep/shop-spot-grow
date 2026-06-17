import bgVideo from "../assets/bg.mp4.asset.json";

export function VideoBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <video
        src={bgVideo.url}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
    </div>
  );
}
