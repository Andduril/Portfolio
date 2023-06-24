import useNavigation from '@/hooks/useNavigation';
import { Stack } from '@mui/material';
import AutoTypingTypography from '../atoms/AutoTypingTypography';
import Section from '../organisms/Section';

const ContactSection = () => {
  const { setActiveLink } = useNavigation();

  const onIntersection = () => {
    setActiveLink('Contact');
  }

  return (
    <Section id={'Contact'} intersectionCallback={onIntersection}>
      <Stack
        sx={{
          minHeight: 'inherit'
        }}
        pt={'60px'}
        alignItems={'center'}
      >
        <AutoTypingTypography variant={'h2'}>
          Contact me :
        </AutoTypingTypography>
        <Stack direction={'row'}>
          
        </Stack>
      </Stack>
    </Section>
  )
}

export default ContactSection
