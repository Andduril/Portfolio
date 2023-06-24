import { Stack, Box, Typography, TypographyProps } from "@mui/material";
import { motion, useCycle } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface AutoTypingTypographyProps extends TypographyProps {
  children: string;
  onAnimationEnd?: () => void;
  /**
   * default: 250
   */
  writtingSpeed?: number;
}

const AutoTypingTypography: React.FC<AutoTypingTypographyProps> = ({
  children,
  onAnimationEnd,
  writtingSpeed = 250,
  ...props
}) => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [blinkCursorVisible, setBlinkCursorVisible] = useCycle(true, false);
  const textRef = useRef<any>(null);

  const getHeight = () => {
    if (textRef.current) {
      return textRef.current.offsetHeight;
    }
  };

  useEffect(() => {
    let index = 1;
    let currentText = children[0];
    let textInterval: number;

    const observer = new IntersectionObserver((entries) => {
      const [ entry ] = entries;
      if (entry.isIntersecting && !animationStarted) {
        textInterval = window.setInterval(() => {
          if (index === children.length) {
            clearInterval(textInterval);
            if (onAnimationEnd) {
              onAnimationEnd();
            }
            return;
          }
    
          currentText += children[index];
          setDisplayedText(currentText);
          index++;
        }, writtingSpeed);

        setAnimationStarted(true);
      }
    }, { rootMargin: '0px 0px 50px 0px' })

    const blinkInterval = setInterval(() => {
      if (index === children.length) setBlinkCursorVisible();
    }, 500);

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textInterval) clearInterval(textInterval);
      if (blinkInterval) clearInterval(blinkInterval);
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      sx={{ position: "relative" }}
      justifyContent={"flex-start"}
      ref={textRef}
    >
      <Typography
        {...props}
      >
        {displayedText}
      </Typography>
      <Box
        component={motion.div}
        sx={{ backgroundColor: "white", marginLeft: 1 }}
        style={{ opacity: blinkCursorVisible ? 1 : 0 }}
        width={3}
        height={getHeight()}
      />
    </Stack>
  );
};

export default AutoTypingTypography;
