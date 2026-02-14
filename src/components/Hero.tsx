import heroImage from '../assets/hero.png';

const Hero = () => {

    return (
        <section
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
            {/* Background Image */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.4)',
                    zIndex: -1,
                }}
            />

            {/* 
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1,
          filter: 'brightness(0.4)',
        }}
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-monitor-close-up-1728-large.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      */}

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <h1
                    className="fade-in"
                    style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: '800',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.025em',
                    }}
                >
                    Building Dreams,<br />
                    <span style={{ color: 'var(--primary)' }}>One Brick at a Time</span>
                </h1>
                <p
                    className="fade-in"
                    style={{
                        fontSize: '1.25rem',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity: 0.9,
                        animationDelay: '0.2s',
                    }}
                >
                    Premium residential and commercial construction services tailored to your vision.
                </p>
                <div
                    className="fade-in"
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'center',
                        animationDelay: '0.4s',
                    }}
                >
                    <a href="#projects" className="btn btn-primary">
                        View Our Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
