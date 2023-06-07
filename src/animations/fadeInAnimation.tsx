import { useInView } from 'react-intersection-observer';

import { motion } from 'framer-motion';

interface FadeInProps {
  duration?: number;
  delay?: number;
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ duration = 0.5, delay = 0, children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: {
      opacity: 0,

    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay :delay,
        duration: duration,
        ease: 'easeOut',
      },
    },
  };


  return (



    <motion.div
      ref={ref}

      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}


      transition={{ duration, delay }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
