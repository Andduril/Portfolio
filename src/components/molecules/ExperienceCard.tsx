import { Card, Divider, Stack, Typography } from "@mui/material";
import { Company } from "../../utils/Experience";
import Image from './Image';

export interface ExperienceCardProps {
  company: Company;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company }) => {
  return (
    <Card sx={{ maxWidth: 345 }} component={'article'}>
      <Stack
        direction={"column"}
        p={4}
        divider={<Divider variant={"middle"} />}
        spacing={2}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Image
            src={company.imageSrc}
            alt={"company logo"}
            width={100}
            height={100}
          />
          <Typography variant={"h3"}>{company.name}</Typography>
        </Stack>
        <Typography variant={"body1"}>{company.description}</Typography>
      </Stack>
    </Card>
  );
};

export default ExperienceCard;
