import {useCurrentFrame} from "remotion";

export const MyVideo = () => {
  const frame = useCurrentFrame();

  return (
    <div style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      The current frame is {frame}.
    </div>
  )
}