import AppBar from "@/components/organisms/AppBar";
import Footer from "@/components/organisms/Footer";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillSection from "@/components/sections/SkillsSection";
import { Box } from "@mui/material";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Anddy Labrut</title>
      </Head>
      <AppBar />
      <Box component={"main"}>
        <HomeSection />
        <SkillSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
