import { Typography } from '@mui/material';

export interface AppBarLinkProps {
  active: boolean;
  children: string;
  onClick: () => void;
}

const AppBarLink: React.FC<AppBarLinkProps> = ({ active , children, onClick}) => {
  return (
    <Typography component={'li'} onClick={onClick} sx={{ textDecoration: active ? 'underline' : 'none', cursor: 'pointer' }}>
      {children}
    </Typography>
  )
};

export default AppBarLink
