// import layer
import { FC } from 'react';
import { motion } from 'framer-motion';

import { AnimeHatching } from 'components/firstviews/AnimeHatching';
import { AnimeCircle } from 'components/firstviews/AnimeCircle';
import { AnimeNeumorphism } from 'components/firstviews/AnimeNeumorphism';

import { ul } from './style.css';

// type layer
export type StyleProps = { className?: string };
export type DataProps = Record<string, unknown>;
export type PresenterProps = StyleProps & DataProps;

// presenter
export const Presenter: FC<PresenterProps> = ({ className, ...props }) => {
  return (
    <div className={className}>
      <motion.ul
        className={`${ul}`}
        initial={{ x: `-100%` }}
        animate={{ x: `0%` }}
        transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
      >
        <AnimeNeumorphism />
        <AnimeCircle />
        <AnimeHatching />
        <AnimeNeumorphism />
        <AnimeCircle />
        <AnimeHatching />
        <AnimeNeumorphism />
        <AnimeCircle />
        <AnimeHatching />
      </motion.ul>
    </div>
  );
};
