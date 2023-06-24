import { Box, Stack, Typography } from "@mui/material";
import laurier from "../../../public/laurier.png";
import { motion } from "framer-motion";
import { useState } from "react";
import useBreakPoint from "../../hooks/useBreakpoint";
import ca_flag from "../../../public/canadian_flag.png";
import EducationModal from "./EducationModal";
import { Diploma } from '../../utils/Diploma';

export interface EducationCardProps {
  diploma: Diploma;
}

const EducationCard: React.FC<EducationCardProps> = ({ diploma }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isUpMd } = useBreakPoint();

  const handleClick = () => setOpenModal(true);

  const handleModalClose = () => setOpenModal(false);

  const educationCardVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <Box component={'li'}>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        p={2}
        m={2}
        sx={{
          width: {
            xs: 250,
            sm: 350,
            lg: 400,
            xl: 420,
          },
          height: {
            xs: 250,
            sm: 350,
            lg: 400,
            xl: 420,
          },
          position: "relative",
          cursor: "pointer",
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        }}
        component={motion.article}
        variants={educationCardVariants}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        onClick={handleClick}
      >
        <Box
          component={"img"}
          src={laurier.src}
          alt={'diploma logo'}
          sx={{
            filter: "invert(90%)",
            width: "50%",
          }}
        />
        <Typography variant={"h5"} component={'h3'}>{diploma.name}</Typography>
        <Stack direction={"row"} spacing={1}>
          <Box
            component={"img"}
            src={ca_flag.src}
            alt={'canadian flag'}
            sx={{ height: "auto", width: "30px", objectFit: "contain" }}
          />
          <Typography variant={"h5"} component={'span'}>{diploma.equivalent}</Typography>
        </Stack>
        <Typography variant={"h6"} component={'span'}>{diploma.year}</Typography>
        {isUpMd && <Typography variant={"body1"} textAlign={'center'} component={'span'}>{diploma.place}</Typography>}
      </Stack>
      <EducationModal
        open={openModal}
        onClose={handleModalClose}
        diploma={diploma}
      />
    </Box>
  );
};

export default EducationCard;
