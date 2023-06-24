import useBreakPoint from "@/hooks/useBreakpoint";
import useNavigation from "@/hooks/useNavigation";
import { diplomas } from "@/utils/Data";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AutoTypingTypography from "../atoms/AutoTypingTypography";
import EducationCard from "../molecules/EducationCard";
import Section from "../organisms/Section";

const EducationSection = () => {
  const { setActiveLink } = useNavigation();
  const [hydrated, setHydrated] = useState(false);
  const { isUpMd } = useBreakPoint();
  const [animationStart, setAnimationStart] = useState<boolean>(false);

  const onIntersection = () => {
    setActiveLink("Education");
  };

  const educationSectionVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Section intersectionCallback={onIntersection} id={"Education"}>
      <Stack
        sx={{
          minHeight: "inherit",
          overflowX: "hidden",
          marginBottom: isUpMd ? "15px" : "30px",
        }}
        alignItems={"center"}
        spacing={10}
        pt={"60px"}
      >
        {hydrated ? (
          <AutoTypingTypography
            variant={"h2"}
            onAnimationEnd={() => setAnimationStart(true)}
            writtingSpeed={100}
          >
            Education
          </AutoTypingTypography>
        ) : (
          <Typography variant={"h2"} sx={{ opacity: 0 }}>
            Education
          </Typography>
        )}
        <Stack
          direction={isUpMd ? "row" : "column"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          alignItems={"center"}
          spacing={5}
          component={motion.ul}
          sx={{ listStyleType: 'none', padding: 0 }}
          variants={educationSectionVariant}
          initial={"initial"}
          animate={animationStart ? "animate" : "initial"}
        >
          {diplomas.map((diploma, index) => {
            return <EducationCard key={index} diploma={diploma} />;
          })}
        </Stack>
      </Stack>
    </Section>
  );
};

export default EducationSection;
