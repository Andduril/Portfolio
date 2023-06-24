import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { Project } from "../../utils/Project";
import { motion } from "framer-motion";
import useBreakPoint from "../../hooks/useBreakpoint";
import ProjectModal from "./ProjectModal";
import LimitedTypography from "../atoms/LimitedTypography";
import { useState } from 'react';

export interface ProjectCardProps {
  project: Project;
}

const projectCardVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { isBelowSm } = useBreakPoint();

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Card
      sx={{ width: isBelowSm ? "85vw" : 500, margin: 5, position: "relative", height: isBelowSm ? 'auto' : 525, display: 'flex', flexDirection: 'column' }}
      component={motion.article}
      variants={projectCardVariants}
    >
      <CardMedia alt={`${project.name} gif`} component={"img"} src={project.gifSrc} />
      <CardContent sx={{ position: "relative", overflowY: "auto", flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h3">
          {project.name}
        </Typography>
        <Stack
          my={1}
          direction={"row"}
          component={'ul'}
          sx={{ listStyleType: 'none', padding: 0 }}
          flexWrap={"wrap"}
        >
          {project.labels.slice(0, 4).map((label, index) => {
            if (index === 3) {
              return (
                <Box sx={{ alignSelf: 'flex-end' }} component={'li'} key={index}>
                  <Typography component={'span'}>
                    ...
                  </Typography>
                </Box>
              )
            }

            return (
              <Chip label={label} key={index} component={'li'} sx={{ mr: 1, mt: 1 }} />
            )
          })}
        </Stack>
        <LimitedTypography
          variant="body2"
          color="text.secondary"
          maxLength={150}
          flexGrow={1}
        >
          {project.description}
        </LimitedTypography>
      </CardContent>
      <CardActions>
        <Button onClick={handleOpen} size="small">
          Learn More
        </Button>
      </CardActions>
      <ProjectModal
        open={open}
        onClose={() => setOpen(false)}
        project={project}
      />
    </Card>
  );
};

export default ProjectCard;
