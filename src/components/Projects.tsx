import project1 from '../assets/project1.png'; // Villa
import project2 from '../assets/project2.png'; // Suburban
import project3 from '../assets/project3.png'; // Apartment
const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Modern Luxury Villa',
            category: 'Residential',
            image: project1,
        },
        {
            id: 2,
            title: 'Skyline Review Apartments',
            category: 'Commercial',
            image: project3,
        },

        {
            id: 4,
            title: 'Cozy Family Home',
            category: 'Residential',
            image: project2,
        },


    ];

    return (
        <section id="projects">
            <div className="container">
                <h2 className="section-title">Verified Projects</h2>
                <p className="section-subtitle">Take a look at some of our finest work delivered with excellence.</p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                }}>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            style={{
                                position: 'relative',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                height: '300px',
                            }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                    e.currentTarget.nextElementSibling?.setAttribute('style', 'opacity: 1; bottom: 0; position: absolute; left: 0; width: 100%; padding: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; transition: all 0.3s ease;');
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                    e.currentTarget.nextElementSibling?.setAttribute('style', 'opacity: 0; bottom: -20px; position: absolute; left: 0; width: 100%; padding: 2rem; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; transition: all 0.3s ease;');
                                }}
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: '-20px',
                                    left: 0,
                                    width: '100%',
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white',
                                    opacity: 0,
                                    transition: 'all 0.3s ease',
                                    pointerEvents: 'none',
                                }}
                            >
                                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{project.title}</h3>
                                <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--primary)' }}>{project.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
