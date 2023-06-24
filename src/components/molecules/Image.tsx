import { Box, BoxProps, Skeleton } from "@mui/material";
import { useState } from "react";

export interface ImageProps extends BoxProps {
  src: string | undefined;
  alt?: string;
  height: number | string;
  width: number | string;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box width={width} height={height} sx={{ position: 'relative' }} {...props}>
      {isLoading && (
        <Skeleton
          variant={'rectangular'}
          width={'100%'}
          height={'100%'}
        />
      )}
      <Box
        component={"img"}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        sx={{ display: isLoading ? 'none' : 'block', width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Box>
  );
};

export default Image;
