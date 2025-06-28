'use client';

import CircleProgress from '@/components/ui/CircleProgress';
import type { ClassValue } from 'clsx';
import { motion, Variants } from 'motion/react';
import { useTranslations } from 'next-intl';

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
};

type Statistic = {
  title: string;
  value: number;
  strokeColor: ClassValue;
};

const MotionStatistics = () => {
  const t = useTranslations('home.presentation.statistics');

  const statistics: Statistic[] = [
    { title: t('yearsOfExperience'), value: 2, strokeColor: 'stroke-blue-500' },
    { title: t('yearsOfStudies'), value: 5, strokeColor: 'stroke-green-500' },
    { title: t('degreesEarned'), value: 3, strokeColor: 'stroke-yellow-500' },
  ];

  return (
    <motion.ul
      className="flex flex-row justify-around"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {statistics.map((stat, i) => (
        <motion.li key={i} variants={itemVariants} className="flex flex-col items-center gap-1">
          <CircleProgress
            className="size-32"
            delay={i * 1}
            initialValue={0}
            value={stat.value}
            maxValue={stat.value}
            strokeColor={stat.strokeColor}
          />
          <span className="text-lg">{stat.title}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default MotionStatistics;
