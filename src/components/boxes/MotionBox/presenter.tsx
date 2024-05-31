// import layer
import { FC } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, HTMLMotionProps } from 'framer-motion';

// type layer
export type PresenterProps = BoxProps & HTMLMotionProps<'div'>;

// presenter
export const Presenter: FC<PresenterProps> = motion(Box);
