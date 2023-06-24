import { Modal, Stack, Typography, Box, Divider } from "@mui/material";
import { EducationCardProps } from "./EducationCard";
import useBreakPoint from "../../hooks/useBreakpoint";
import CloseIcon from "@mui/icons-material/Close";
import ca_flag from "../../../public/canadian_flag.png";
import Image from "./Image";

export interface EducationModalProps extends EducationCardProps {
  open: boolean;
  onClose: () => void;
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

const EducationModal: React.FC<EducationModalProps> = ({
  open,
  onClose,
  diploma,
}) => {
  const { isBelowLg, isBelowMd } = useBreakPoint();
  const [establishment, city, country] = diploma.place.split(",");

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
      <Box position={"relative"} sx={modalStyle}>
        <Box
          onClick={onClose}
          sx={{
            position: "sticky",
            top: 0,
            left: 0,
            cursor: "pointer",
            zIndex: 10,
            display: 'inline-block'
          }}
          p={1}
        >
          <CloseIcon fontSize={"large"} />
        </Box>
        <Box
          sx={{
            height: isBelowMd ? 500 : "auto",
            width: isBelowMd ? "90vw" : "auto",
          }}
        >
          <Stack
            direction={"column"}
            sx={{ position: "relative" }}
            p={isBelowMd ? 0 : 3}
            spacing={1}
            divider={<Divider variant={"middle"} />}
          >
            <Stack
              sx={{ width: "100%", position: "relative" }}
              direction={isBelowLg ? "column" : "row"}
              alignItems={"center"}
              spacing={isBelowLg ? 0 : 3}
            >
              <Image
                src={diploma.imageSrc}
                alt={"diplome"}
                width={isBelowLg ? "80%" : "50%"}
                height={225}
                sx={{
                  // width: isBelowLg ? "80%" : "50%",
                  minWidth: 200,
                }}
              />
              <Stack direction={"column"} spacing={1} pb={1}>
                <Stack direction={"column"} alignItems={"center"}>
                  <Typography variant={"h4"}>{diploma.name}</Typography>
                  <Typography variant={"h4"}>{diploma.year}</Typography>
                </Stack>
                <Stack direction={"row"} alignItems={"center"} spacing={1}>
                  <Box
                    component={"img"}
                    src={ca_flag.src}
                    sx={{ height: "auto", width: "30px", objectFit: "contain" }}
                  />
                  <Typography variant={"h5"}>{diploma.equivalent}</Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing={2}>
              <Typography variant={"h6"}>Informations :</Typography>
              <Stack spacing={1} component={"ul"}>
                <Typography variant={"body1"} component={"li"}>
                  Establishment : {establishment}
                </Typography>
                <Typography variant={"body1"} component={"li"}>
                  City: {city}
                </Typography>
                <Typography variant={"body1"} component={"li"}>
                  Country: {country}
                </Typography>
              </Stack>
            </Stack>
            <Box p={1}>
              <Typography variant={'body1'} textAlign={'justify'}>
                {diploma.description}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};

export default EducationModal;
