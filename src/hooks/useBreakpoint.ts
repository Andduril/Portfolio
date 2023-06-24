import { useMediaQuery, useTheme } from '@mui/material'

const useBreakPoint = () => {
  const theme = useTheme();
  const isBelowXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isUpXs = useMediaQuery(theme.breakpoints.up('xs'));
  const isBelowSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  const isBelowMd = useMediaQuery(theme.breakpoints.down('md'));
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const isBelowLg = useMediaQuery(theme.breakpoints.down('lg'));
  const isUpLg = useMediaQuery(theme.breakpoints.up('lg'));
  const isBelowXl = useMediaQuery(theme.breakpoints.down('xl'));
  const isUpXl = useMediaQuery(theme.breakpoints.up('xl'));

  return { isBelowXs, isUpXs, isBelowSm, isUpSm, isBelowMd, isUpMd, isBelowLg, isUpLg, isBelowXl, isUpXl }
}

export default useBreakPoint
