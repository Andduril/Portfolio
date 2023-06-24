import { Box } from "@mui/material";
import React from "react";

export interface VideoPlayerProps {
  src: string | undefined;
  width: string | number;
  height: string | number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width,
  height,
}) => {
  return (
    <Box sx={{ position: "relative" }} width={width} height={height}>
      <Box
        component={"video"}
        width={"100%"}
        height={"100%"}
        src={src}
        sx={{ objectFit: "contain" }}
        autoPlay
        loop
        muted
      />
    </Box>
  );
};

export default VideoPlayer;
