import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInFromSideProps {
    children: React.ReactNode;
    direction?: 'left' | 'bottom'; // Specify the animation direction (optional)
}

const FadeInFromSide: React.FC<FadeInFromSideProps> = ({
    children,
    direction = 'left',
}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? '-100%' : '0%',
            y: direction === 'bottom' ? '100%' : '0',
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.5,
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
        >
            {children}
        </motion.div>
    );
};

export default FadeInFromSide;