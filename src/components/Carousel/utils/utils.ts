import { StaticImageData } from 'next/image';
import html from '@/assets/icons/HTML5.png';
import css from '@/assets/icons/CSS3.png';
import js from '@/assets/icons/JavaScript.png';
import ts from '@/assets/icons/TypeScript.png';
import gitb from '@/assets/icons/gitBash.png';
import boot from '@/assets/icons/Bootstrap.png';
import mui from '@/assets/icons/MUI.png';
import mongo from '@/assets/icons/MongoDB.png';
import next from '@/assets/icons/Next.js.png';
import node from '@/assets/icons/Node.js.png';
import postgre from '@/assets/icons/PostgresSQL.png';
import react from '@/assets/icons/React.png';
import redux from '@/assets/icons/Redux.png';
import tailwind from '@/assets/icons/TailwindCSS.png';

export type Slide = {
  src: StaticImageData;
  title: string;
};

export const imagesArray: Slide[] = [
    { src: html, title: 'HTML5' },
    { src: css, title: 'CSS3' },
    { src: js, title: 'JavaScript' },
    { src: ts, title: 'TypeScript' },
    { src: gitb, title: 'Git Bash' },
    { src: boot, title: 'Bootstrap' },
    { src: mui, title: 'Material UI' },
    { src: mongo, title: 'MongoDB' },
    { src: next, title: 'Next.JS' },
    { src: node, title: 'Node.JS' },
    { src: postgre, title: 'PostgreSQL' },
    { src: react, title: 'React' },
    { src: redux, title: 'Redux' },
    { src: tailwind, title: 'Tailwind CSS' }]