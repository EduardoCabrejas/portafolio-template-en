"use client";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Link as ScrollLink } from 'react-scroll';

const ScrollToTopButton: React.FC = () => {
  return (
    <ScrollLink
      to="nav-bar"
      smooth={true}
      duration={500}
      className="fixed bottom-4 right-4 moveButton"
    >
      <KeyboardDoubleArrowUpIcon className='moveIcon' />
    </ScrollLink>
  );
};

export default ScrollToTopButton;
