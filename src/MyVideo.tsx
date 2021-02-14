import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

const Title: React.FC<{title: string}> = ({title}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 100], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <div>{title}</div>
  )
}

export const MyVideo = () => {
  const frame = useCurrentFrame();
  const {fps, durationInFrames, width, height} = useVideoConfig();
  const opacity = interpolate(frame, [0, 100], [0, 1], {extrapolateRight: 'clamp'});
  const scale = spring({fps, from: 0, to: 1, frame})

  return (
    <>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        <Title title="Hello world"></Title>
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The current frame is {frame}.
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white"}}>
        The video is {durationInFrames / fps} seconds long.
      </div>
      <div style={{flex: 1, justifyContent: "center", alignItems: "center", color: "white", opacity: opacity}}>
        <div style={{transform: `scale(${scale})`}}>
          Hello world.
        </div>
      </div>
    </>
  )
}