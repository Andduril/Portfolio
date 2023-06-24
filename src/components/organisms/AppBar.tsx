import {
  Stack,
  Avatar,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box
} from "@mui/material";
import AppBarLink from "../atoms/AppBarLink";
import useNavigation from "../../hooks/useNavigation";
import guts from "../../../public/guts.jpg";
import useBreakPoint from "../../hooks/useBreakpoint";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const AppBar = () => {
  const { activeLink } = useNavigation();
  const { isBelowMd } = useBreakPoint();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLinkClick = (name: string) => {
    document.getElementById(name)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Stack
      sx={{
        width: "100%",
        height: 60,
        position: "fixed",
        top: 0,
        zIndex: 10,
        backgroundColor: isBelowMd ? "#000000" : "none",
        backgroundImage: isBelowMd
          ? "none"
          : "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
      }}
      component={"header"}
      p={1}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <Stack
        onClick={() => handleLinkClick("About me")}
        sx={{ cursor: "pointer" }}
        direction={"row"}
        alignItems={"center"}
        spacing={2}
      >
        <Avatar alt={"Logo"} sx={{ width: 50, height: 50 }} src={guts.src} />
        <Typography component={"span"} variant={"h4"}>
          Andduril
        </Typography>
      </Stack>
      {isBelowMd ? (
        <Box component={'nav'}>
          <Button onClick={handleMenuClick} sx={{ color: "#fff" }}>
            <MenuIcon fontSize={"large"} />
          </Button>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem
              onClick={() => handleLinkClick("About me")}
              selected={activeLink === "About me" ? true : false}
            >
              About me
            </MenuItem>
            <MenuItem
              onClick={() => handleLinkClick("Skills")}
              selected={activeLink === "Skills" ? true : false}
            >
              Skills
            </MenuItem>
            <MenuItem
              onClick={() => handleLinkClick("Projects")}
              selected={activeLink === "Projects" ? true : false}
            >
              Projects
            </MenuItem>
            <MenuItem
              onClick={() => handleLinkClick("Experiences")}
              selected={activeLink === "Experiences" ? true : false}
            >
              Experiences
            </MenuItem>
            <MenuItem
              onClick={() => handleLinkClick("Education")}
              selected={activeLink === "Education" ? true : false}
            >
              Education
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        <Stack component={"nav"} direction={"row"} spacing={2} mx={4}>
          <Stack
            component={"ul"}
            sx={{ listStyleType: "none" }}
            direction={"row"}
            spacing={4}
          >
            <AppBarLink
              onClick={() => handleLinkClick("About me")}
              active={activeLink === "About me" ? true : false}
            >
              About me
            </AppBarLink>
            <AppBarLink
              onClick={() => handleLinkClick("Skills")}
              active={activeLink === "Skills" ? true : false}
            >
              Skills
            </AppBarLink>
            <AppBarLink
              onClick={() => handleLinkClick("Projects")}
              active={activeLink === "Projects" ? true : false}
            >
              Projects
            </AppBarLink>
            <AppBarLink
              onClick={() => handleLinkClick("Experiences")}
              active={activeLink === "Experiences" ? true : false}
            >
              Experiences
            </AppBarLink>
            <AppBarLink
              onClick={() => handleLinkClick("Education")}
              active={activeLink === "Education" ? true : false}
            >
              Education
            </AppBarLink>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default AppBar;
