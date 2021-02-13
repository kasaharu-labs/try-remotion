import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width, height} = useVideoConfig();
  const opacity = interpolate(frame, [0, 100], [0, 1], {extrapolateRight: 'clamp'});


  return (
    <>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The current frame is {frame}.
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The video is {durationInFrames / fps} seconds long.
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white", opacity: opacity}}>
        Hello world.
      </div>
    </>
  )
}