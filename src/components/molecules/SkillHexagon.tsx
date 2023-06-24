import { Card, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Skill } from "../../utils/Skill";

export interface SkillHexagonProps {
  skill: Skill,
  onClick: (skill: Skill) => void;
}

const SkillHexagon: React.FC<SkillHexagonProps> = ({ skill, onClick }) => {
  return (
    <Card
      sx={{
        clipPath:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Forme hexagonale
        marginY: {
          xs: "-10px",
          sm: "-15px",
          lg: "-20px",
        },
        marginX: "5px",
        width: {
          xs: 100,
          sm: 150,
          lg: 200,
        },
        height: {
          xs: 100,
          sm: 150,
          lg: 200,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      component={motion.div}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      onClick={() => onClick(skill)}
    >
      <Typography variant={"h6"} component={'span'}>{skill.name}</Typography>
    </Card>
  );
};

export default SkillHexagon;
