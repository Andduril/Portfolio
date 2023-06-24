import { Typography, TypographyProps } from '@mui/material'

export interface LimitedTypographyProps extends TypographyProps {
  maxLength: number;
}

const LimitedTypography: React.FC<LimitedTypographyProps> = ({ maxLength, ...props }) => {
  if (typeof props.children === 'string') {
    props.children = props.children.substring(0, maxLength) + '...';
  }

  return (
    <Typography {...props}/>
  )
}

export default LimitedTypography
