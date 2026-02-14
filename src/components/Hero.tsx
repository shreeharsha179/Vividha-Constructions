import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroImage from '../assets/hero.png';

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '20%']);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section
            ref={sectionRef}
            id="home"
            style={{
                position: 'relative',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                color: 'var(--white)',
                padding: 0,
            }}
        >
            {/* Video Background */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                }}
            >
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={heroImage}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.35)',
                    }}
                >
                    <source src="/hero-bg.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '30%',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)',
                    zIndex: 0,
                }}
            />

            <motion.div
                className="container"
                style={{ textAlign: 'center', zIndex: 1, opacity: textOpacity, y: textY }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={itemVariants}
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.025em',
                        textShadow: '0 2px 20px rgba(0,0,0,0.3)',
                    }}
                >
                    Building Dreams,<br />
                    <span style={{ color: 'var(--primary)' }}>One Brick at a Time</span>
                </motion.h1>
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: '1.25rem',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0.9,
                        textShadow: '0 1px 10px rgba(0,0,0,0.2)',
                    }}
                >
                    Premium residential and commercial construction services tailored to your vision.
                </motion.p>
                <motion.div
                    variants={itemVariants}
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                    }}
                >
                    <motion.a
                        href="#projects"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Our Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn btn-outline"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Scroll down indicator */}
            <a href="#services" className="scroll-indicator">
                <div className="scroll-indicator-mouse">
                    <div className="scroll-indicator-wheel" />
                </div>
            </a>
        </section>
    );
};

export default Hero;
