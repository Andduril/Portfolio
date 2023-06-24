import useNavigation from "@/hooks/useNavigation";
import { experiences } from "@/utils/Data";
import { Box, Stack, Typography } from "@mui/material";
import AutoTypingTypography from "../atoms/AutoTypingTypography";
import ExperienceGroup from "../organisms/ExperienceGroup";
import Section from "../organisms/Section";
import { useEffect, useState } from "react";

const ExperienceSection = () => {
  const { setActiveLink } = useNavigation();
  const [hydrated, setHydrated] = useState(false);

  const onIntersection = () => {
    setActiveLink("Experiences");
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Section intersectionCallback={onIntersection} id={"Experiences"}>
      <Stack
        sx={{ overflowX: "hidden" }}
        direction={"column"}
        alignItems={"center"}
        pt={"60px"}
      >
        {hydrated ? (
          <AutoTypingTypography variant={"h2"}>
            Experiences
          </AutoTypingTypography>
        ) : (
          <Typography variant={"h2"} sx={{ opacity: 0 }}>
            Experiences
          </Typography>
        )}
        <Box component={'ol'} sx={{ listStyleType: 'none', padding: 0 }}>
          {experiences.map((experience, index) => (
            <ExperienceGroup
              key={index}
              reverse={index % 2 === 1}
              experience={experience}
            />
          ))}
        </Box>
      </Stack>
    </Section>
  );
};

export default ExperienceSection;
