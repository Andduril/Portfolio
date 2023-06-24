import { Box, Divider, Modal, Stack, Typography } from "@mui/material";
import useBreakPoint from "../../hooks/useBreakpoint";
import { Skill } from "../../utils/Skill";
import CloseIcon from "@mui/icons-material/Close";
import Image from "./Image";
import { motion } from "framer-motion";

export interface SkillModalProps {
  open: boolean;
  onClose: () => void;
  skill: Skill;
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
};

const SkillModal: React.FC<SkillModalProps> = ({ open, onClose, skill }) => {
  const { isBelowSm } = useBreakPoint();

  const getLevel = (): string => {
    switch (skill.level) {
      case 4:
        return "Expert";
      case 3:
        return "Advanced";
      case 2:
        return "Intermediate";
      default:
        return "Beginner";
    }
  };

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
      <Box
        component={motion.div}
        position={"relative"}
        sx={modalStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
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
        <Stack
          sx={{
            height: isBelowSm ? 420 : "auto",
            width: isBelowSm ? "80vw" : "50vw",
            maxWidth: 600,
          }}
          direction={"column"}
          spacing={2}
          divider={<Divider variant={"middle"} />}
        >
          <Stack
            px={2}
            direction={isBelowSm ? "column" : "row"}
            spacing={isBelowSm ? 2 : 0}
            justifyContent={"space-between"}
            alignItems={"center"}
            alignSelf={isBelowSm ? 'flex-start' : 'auto'}
          >
            <Stack direction={"row"} alignItems={"center"} spacing={1}>
              <Image
                src={skill.imageSrc}
                alt={"logo"}
                width={isBelowSm ? 75 : 100}
                height={isBelowSm ? 75 : 100}
              />
              <Stack direction={"column"} spacing={1}>
                <Typography variant={"h4"}>{skill.name}</Typography>
              </Stack>
            </Stack>
            <Stack>
              <Typography variant={"body1"}>Level: {getLevel()}</Typography>
            </Stack>
          </Stack>
          <Stack direction={"column"} spacing={1} p={2}>
              <Typography variant={'h4'}>Description :</Typography>
              <Typography textAlign={"justify"} variant={"body1"}>
                {skill.description}
              </Typography>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default SkillModal;
