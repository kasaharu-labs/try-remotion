import { useCurrentFrame, useVideoConfig } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width, height} = useVideoConfig();

  return (
    <>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The current frame is {frame}.
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The video is {durationInFrames / fps} seconds long.
      </div>
    </>
  )
}