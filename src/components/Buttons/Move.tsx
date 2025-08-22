"use client";
import React, { FC } from "react";
import { Link as ScrollLink } from 'react-scroll';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollToTopButton: FC = () => {
  return (
    <ScrollLink
      to="nav-bar"
      smooth={true}
      duration={500}
      className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#043a5e] cursor-pointer transition-all duration-500 ease-in-out hover:bg-[var(--navBarBackground)] hover:shadow-[0px_0px_0px_4px_#00A4BA]"
      title="Volver al Inicio"
      aria-label="Volver al Inicio"
    >
      <KeyboardDoubleArrowUpIcon className="text-white w-[50px] transition-transform duration-500 group-hover:translate-y-[-200%]" />
    </ScrollLink>
  );
};

export default ScrollToTopButton;
