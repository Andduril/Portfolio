import { Modal, Box, Typography, Stack, Chip } from "@mui/material";
import { Project } from "../../utils/Project";
import CloseIcon from "@mui/icons-material/Close";
import useBreakPoint from '../../hooks/useBreakpoint';

export interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
  project: Project;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  overflowY: "auto",
  p: 1,
  "&:focus": { outline: "none", boxShadow: "none" },
  overflow: "hidden",
};

const ProjectModal: React.FC<ProjectModalProps> = ({
  open,
  onClose,
  project,
}) => {
  const { isBelowLg, isBelowSm } = useBreakPoint();

  return (
    <Modal
      sx={{
        "&:focus": { outline: "none", boxShadow: "none" },
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.82)",
        },
      }}
      open={open}
      onClose={onClose}
    >
      <Box sx={modalStyle} width={isBelowSm ? "85vw" : "auto"} height={"auto"}>
        <Box
          onClick={onClose}
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            cursor: "pointer",
            zIndex: 10,
            display: "inline-block",
          }}
          p={1}
        >
          <CloseIcon fontSize={"large"} />
        </Box>
        <Stack direction={isBelowLg ? "column" : "row"} justifyContent={isBelowLg ? "center" : "normal"} alignItems={"center"} spacing={isBelowLg ? 0 : 5}>
          <Box
            component={"img"}
            src={project.gifSrc}
            alt={"Project-gif"}
            sx={{
              width: isBelowLg ? '100%' : 'auto',
              objectFit: 'contain'
            }}
          />
          <Stack p={2} direction={"column"} spacing={2} flexGrow={1}>
            <Typography variant={"h2"}>{project.name}</Typography>
            <Stack direction={"row"}>
              {project.labels.map((label, index) => (
                <Chip label={label} key={index} sx={{ mr: 1, mt: 1 }} />
              ))}
            </Stack>
            <Typography
              sx={{ overflowY: "auto" }}
              variant={"body1"}
              textAlign={"justify"}
            >
              {project.description}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default ProjectModal;
