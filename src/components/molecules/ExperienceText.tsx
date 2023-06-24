import { Button, Chip, Stack, Typography } from "@mui/material";
import useBreakPoint from '../../hooks/useBreakpoint';
import Image from './Image';
import { Experience } from '../../utils/Experience';
import CompanyModal from './CompanyModal';
import { useState } from 'react';

export interface ExperienceTextProps {
  experience : Experience;
}

const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return new Intl.DateTimeFormat('fr-FR', options).format(date);
}

const ExperienceText: React.FC<ExperienceTextProps> = ({experience}) => {
  const { isBelowLg } = useBreakPoint();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Stack flexGrow={1} spacing={2}>
      <Typography variant={'h3'}>{experience.name}</Typography>
      <Typography variant={'h6'} component={'span'}>{formatDate(experience.startDate)} &#8212; {experience.endDate ? formatDate(experience.endDate) : 'today'}</Typography>
      {isBelowLg && (
        <Stack direction={'row'} alignItems={'center'} spacing={2}>
          <Image 
            src={experience.company.imageSrc}
            alt={'company logo'}
            width={40}
            height={40}
          />
          <Typography variant={'h6'} component={'span'}>{experience.company.name}</Typography>
          <Button
            color={'info'}
            variant={'outlined'}
            onClick={() => setOpen(true)}
          >
            Company Details
          </Button>
          <CompanyModal
            company={experience.company}
            open={open}
            onClose={() => setOpen(false)}
          />
        </Stack>
      )}
      <Stack component={'ul'} sx={{ listStyleType: 'none', padding: 0 }} direction={'row'} spacing={1}>
        {experience.labels.map((label, index) => <Chip component={'li'} key={index} label={label.name} variant={'outlined'} color={'primary'}/>)}
      </Stack>
      <Typography variant={"body1"} textAlign={'justify'} component={'p'}>
        {experience.jobDescription}
      </Typography>
    </Stack>
  );
};

export default ExperienceText;
