import { useContext } from 'react'
import { NavigationContext } from '../providers/NavigationProvider'

const useNavigation = () => {
  const {activeLink, setActiveLink} = useContext(NavigationContext);

  return { activeLink, setActiveLink };
}

export default useNavigation;
