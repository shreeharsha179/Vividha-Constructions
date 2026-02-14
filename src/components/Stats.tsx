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

    return (
        <div className="stats-section">
            <div className="container">
                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '2rem',
                        position: 'relative',
                        zIndex: 1,
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
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
