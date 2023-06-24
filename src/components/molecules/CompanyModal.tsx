import { Modal, Box, Stack, Typography, Divider } from "@mui/material";
import { Company } from "../../utils/Experience";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import Image from "./Image";

export interface CompanyModalProps {
  onClose: () => void;
  open: boolean;
  company: Company;
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

const CompanyModal: React.FC<CompanyModalProps> = ({
  onClose,
  open,
  company,
}) => {
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
          width={'85vw'}
          divider={<Divider variant={'middle'}/>}
        >
          <Stack
            direction={"row"}
            alignItems={'center'}
            spacing={3}
            p={2}
          >
            <Image
              src={company.imageSrc}
              alt={"company-logo"}
              width={100}
              height={100}
            />
            <Typography variant={'h3'}>{company.name}</Typography>
          </Stack>
          <Box p={2}>
            <Typography textAlign={'justify'} variant={'body1'}>{company.description}</Typography>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
};

export default CompanyModal;
