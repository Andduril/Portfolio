import { Stack, Typography, Avatar, Box } from "@mui/material";
import linkedIn from "../../../public/linkedin.png";
import github from "../../../public/github-mark-white.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Stack
      component={'footer'}
      width={"100%"}
      height={250}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      sx={{ backgroundColor: "#000000" }}
    >
      <Typography variant={'body1'} component={'span'}>Thanks for your time !</Typography>
      <Stack component={'ul'} sx={{ listStyleType: 'none', padding: 0 }} direction={"row"} spacing={2}>
        <Box component={'li'}>
          <Avatar
            component={motion.a}
            href={"https://www.linkedin.com/in/anddy-labrut-569365213/"}
            sx={{ width: 40, height: 40, cursor: "pointer" }}
            src={linkedIn.src}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          />
        </Box>
        <Box component={'li'}>
          <Avatar
            component={motion.a}
            href={"https://github.com/Andduril"}
            sx={{ width: 40, height: 40, cursor: 'pointer' }}
            src={github.src}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          />
        </Box>
      </Stack>
      <Typography variant={'body1'} component={'span'}>Anddy Labrut ©2023</Typography>
    </Stack>
  );
};

export default Footer;
