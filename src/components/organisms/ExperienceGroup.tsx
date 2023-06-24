import { Box, Stack } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../../utils/Experience";
import ExperienceCard from "../molecules/ExperienceCard";
import ExperienceText from "../molecules/ExperienceText";
import useBreakPoint from "../../hooks/useBreakpoint";

export interface ExperienceGroupProps {
  reverse?: boolean;
  children?: React.ReactNode;
  experience: Experience;
}

const ExperienceGroup: React.FC<ExperienceGroupProps> = ({
  reverse = false,
  experience,
}) => {
  const { isUpLg } = useBreakPoint();

  if (isUpLg) {
    return (
      <Box component={"li"}>
        <Stack
          component={motion.div}
          initial={{ opacity: 0, x: reverse ? 400 : -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          direction={reverse ? "row-reverse" : "row"}
          p={10}
          spacing={3}
          maxWidth={1200}
        >
          <ExperienceCard company={experience.company} />
          <ExperienceText experience={experience} />
        </Stack>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ mt: 10 }}
      p={2}
      component={motion.li}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
      viewport={{ once: true }}
    >
      <ExperienceText experience={experience} />
    </Box>
  );
};

export default ExperienceGroup;
