import { Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useNavigation from "@/hooks/useNavigation";
import Section from "../organisms/Section";
import AutoTypingTypography from "../atoms/AutoTypingTypography";

const HomeSection = () => {
  const { setActiveLink } = useNavigation();
  const [showText, setShowText] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);

  const onIntersection = () => {
    setActiveLink("About me");
  };

  const handleArrowClick = () => {
    document.getElementById("Skills")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Section intersectionCallback={onIntersection} id={"About me"}>
      <Stack
        sx={{ minHeight: "100vh" }}
        pt={"80px"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack
          component={'article'}
          sx={{
            width: {
              xs: "90vw",
              md: "80vw",
              lg: "60vw",
            },
          }}
          spacing={1}
        >
          <Typography variant={"h5"} component={"span"}>
            Hi my name is
          </Typography>
          {hydrated ? (
            <AutoTypingTypography
              variant={"h1"}
              color={"primary"}
              onAnimationEnd={() => setShowText(!showText)}
              writtingSpeed={190}
            >
              Anddy Labrut
            </AutoTypingTypography>
          ) : (
            <Typography sx={{ opacity: 0 }} variant={"h1"}>Anddy Labrut</Typography>
          )}
          <Stack
            component={motion.div}
            spacing={3}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: showText ? 1 : 0, x: showText ? 0 : -100 }}
            transition={{ duration: 0.5 }}
          >
            <Typography component={"h2"} variant={"h2"}>
              Junior Fullstack developer
            </Typography>
            <Typography variant={"body1"} component={"p"} align={"justify"}>
              After completing my Bachelor&apos;s degree in Computer Science in
              France, my goal now is to pursue a career as a Full Stack Web
              Developer in Canada. Having obtained my visa (Working holiday), I
              can work immediately.
            </Typography>
            <Typography variant={"body1"} component={"p"} align={"justify"}>
              During my studies, I acquired a strong knowledge of the basics of
              computer science and personally learned various fundamental
              technologies in web development. I have had the opportunity to
              work in different types of companies, ranging from startups to
              multinationals, as well as volunteering.
            </Typography>
            <Typography variant={"body1"} component={"p"} align={"justify"}>
              This international experience would be a way for me to grow both
              professionally and personally. I am motivated by the idea of
              learning new things and being able to work in a company using my
              skills in computer science and project management.
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"}>
          <KeyboardArrowDownIcon
            component={motion.svg}
            onClick={handleArrowClick}
            sx={{ mb: 5, cursor: "pointer" }}
            fontSize={"large"}
            animate={{
              y: [0, 20, 0],
              type: "spring",
              transition: { duration: 2, repeat: Infinity },
            }}
          />
        </Stack>
      </Stack>
    </Section>
  );
};

export default HomeSection;
