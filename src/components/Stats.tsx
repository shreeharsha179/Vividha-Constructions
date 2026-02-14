import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface CounterProps {
    target: number;
    suffix?: string;
}

const Counter = ({ target, suffix = '' }: CounterProps) => {
    const [isInView, setIsInView] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isInView) {
                    setIsInView(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isInView]);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, target, {
                duration: 2,
                ease: "easeOut" as const,
            });
            return controls.stop;
        }
    }, [isInView, count, target]);

    useEffect(() => {
        const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
        return unsubscribe;
    }, [rounded]);

    return (
        <span ref={ref} className="stat-number">
            {displayValue}{suffix}
        </span>
    );
};

const Stats = () => {
    const stats = [
        { number: 50, suffix: '+', label: 'Projects Completed' },
        { number: 12, suffix: '+', label: 'Years Experience' },
        { number: 100, suffix: '%', label: 'Client Satisfaction' },
        { number: 5, suffix: '+', label: 'Expert Team Members' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    return (
        <div className="stats-section">
            <div className="container">
                <motion.div
                    className="stats-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <Counter target={stat.number} suffix={stat.suffix} />
                            <div className="stat-label">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Stats;
