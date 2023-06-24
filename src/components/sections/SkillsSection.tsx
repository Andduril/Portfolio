import useNavigation from '@/hooks/useNavigation';
import { skills } from '@/utils/Data';
import { Skill } from '@/utils/Skill';
import { Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import AutoTypingTypography from '../atoms/AutoTypingTypography';
import SkillHexagon from '../molecules/SkillHexagon';
import SkillModal from '../molecules/SkillModal';
import Section from '../organisms/Section';

const SkillSection = () => {
  const { setActiveLink } = useNavigation();
  const [hydrated, setHydrated] = useState(false);
  const [animationStart, setAnimationStart] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [skill, setSkill] = useState<Skill>(skills[0]);


  const onIntersection = () => {
    setActiveLink("Skills");
  };

  const handleSkillHexagonClick = (skill: Skill) => {
    setSkill(skill);
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false);
  }

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <Section id={"Skills"} intersectionCallback={onIntersection}>
      <Stack
        sx={{
          minHeight: "inherit",
          overflowX: 'hidden'
        }}
        alignItems={"center"}
        justifyContent={'space-evenly'}
        spacing={3}
      >
        {hydrated ? (
          <AutoTypingTypography
          variant={"h2"}
          onAnimationEnd={() => setAnimationStart(true)}
        >
          Skills
        </AutoTypingTypography>
        ) : (
          <Typography sx={{ opacity: 0 }} variant={'h2'}>
            Skills
          </Typography>
        )}
        <Stack
          direction={'column'}
          sx={{ height: 'auto', listStyleType: 'none' }}
          p={2}
          component={motion.ul}
          initial={{ opacity: 0, y: 100 }}
          animate={animationStart && { opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          <Stack component={'li'} direction={'row'} justifyContent={'center'}>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[0]}/>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[1]}/>
          </Stack>
          <Stack component={'li'} direction={'row'} justifyContent={'center'}>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[2]}/>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[3]}/>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[4]}/>
          </Stack>
          <Stack component={'li'} direction={'row'} justifyContent={'center'}>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[5]}/>
            <SkillHexagon onClick={handleSkillHexagonClick} skill={skills[6]}/>
          </Stack>
        </Stack>
      </Stack>
      <SkillModal
        open={open}
        onClose={handleModalClose}
        skill={skill}
      />
    </Section>
  );
};

export default SkillSection;
