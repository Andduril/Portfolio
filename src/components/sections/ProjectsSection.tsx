import useNavigation from '@/hooks/useNavigation';
import { Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import AutoTypingTypography from '../atoms/AutoTypingTypography';
import ProjectCard from '../molecules/ProjectCard';
import Section from '../organisms/Section';
import { projects } from '@/utils/Data';
import { useEffect, useState } from 'react';

const projectsSectionVariant = {
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

const ProjectsSection = () => {
  const { setActiveLink } = useNavigation();
  const [hydrated, setHydrated] = useState(false);

  const onIntersection = () => {
    setActiveLink("Projects");
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Section intersectionCallback={onIntersection} id={"Projects"}>
      <Stack
        sx={{ minHeight: "inherit", overflow: "hidden" }}
        pt={"60px"}
        alignItems={"center"}
      >
        {hydrated ? (
          <AutoTypingTypography variant={"h2"}>Projects</AutoTypingTypography>
        ) : (
          <Typography variant={'h2'} sx={{ opacity: 0 }}>Projects</Typography>
        )}
        <Stack          
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
          flexGrow={1}
          component={motion.ul}
          sx={{ listStyleType: 'none', padding: 0 }}
          variants={projectsSectionVariant}
          initial={"initial"}
          whileInView={"animate"}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <Box component={'li'} key={index}>
              <ProjectCard project={project} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </Section>
  );
};

export default ProjectsSection;
