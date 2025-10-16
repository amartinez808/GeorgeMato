import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const accolades = [
  {
    title: '30+ years of representation',
    description:
      'Guiding ultra-high-net-worth families and collectors through complex acquisitions across Miami and Southwest Florida.',
  },
  {
    title: '$15B+ in development sales',
    description:
      'Stewarded waterfront towers, branded residences, and hotel-partnered sanctuaries from blueprint through completion.',
  },
  {
    title: 'Licensed Realtor',
    description:
      'Florida licensed Realtor with specialized expertise in luxury waterfront properties and high-end condominium developments.',
  },
  {
    title: 'Discretion-first philosophy',
    description:
      'Every engagement is private, data-led, and engineered to honor personal brand, timeline, and legacy objectives.',
  },
  {
    title: 'Market Intelligence Leader',
    description:
      'Proprietary research and exclusive market insights driving strategic acquisition decisions for discerning clientele.',
  },
  {
    title: 'Professional Network',
    description:
      'Cultivated relationships with elite architects, private lenders, legal partners, and luxury service providers.',
  },
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className="nav-inner">
          <div className="brand">George Mato | The Luxury Group</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/#gallery">Residences</Link>
            <Link to="/#approach">Approach</Link>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="about-page">
        <section className="about">
          <div className="about-inner">
            <img
              src="/george-mato.jpg"
              alt="George Mato, principal of The Luxury Group"
              className="about-headshot"
              loading="lazy"
            />
            <div className="about-copy">
              <h2>About George Mato</h2>
              <h3>Principal, The Luxury Group — Licensed Realtor</h3>
              <p className="about-mission">
                <em>"The finest waterfront residences curated personally."</em>
              </p>
              <p>
                With over three decades of distinguished service in luxury real estate, George Mato has established himself 
                as Miami and Southwest Florida's preeminent consultant for ultra-high-net-worth clients seeking exceptional 
                waterfront properties.
              </p>
              <p>
                As a Florida licensed Realtor, George specializes in the most exclusive market segments: penthouse acquisitions, 
                branded residences, and private marina estates. His approach combines deep market intelligence with white-glove 
                service, ensuring each client receives unparalleled access to off-market opportunities.
              </p>
              <p>
                His role is to listen first. With a measured cadence, George translates wish lists into discreet search
                mandates, orchestrating architects, private lenders, and legal partners so clients can move decisively
                when the address is right.
              </p>
              <p>
                With extensive experience in luxury development projects and coastal estate acquisitions, George's 
                calm confidence and proprietary market insights consistently deliver exceptional results for his 
                discerning clientele.
              </p>
              <p className="about-signature">– George Mato, Licensed Realtor</p>
              <div className="about-credentials">
                <a href="https://www.linkedin.com/in/georgemato/" target="_blank" rel="noopener noreferrer" className="credential-link">
                  View Professional Profile on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="about-highlights">
          <div className="about-highlights-inner">
            {accolades.map((item) => (
              <div className="about-highlight-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Engage George Directly</h2>
          <p>
            Request a private consultation to outline objectives, timing, and the level of discretion required. George
            responds personally to every introduction.
          </p>
          <div className="contact-actions">
            <a className="cta" href="mailto:workwith@itsradai.com">
              Schedule consultation
            </a>
            <a className="linkedin-link" href="https://www.linkedin.com/in/georgemato/" target="_blank" rel="noopener noreferrer">
              View LinkedIn Profile
            </a>
          </div>
        </section>
      </main>

      <footer>© {currentYear} George Mato · All rights reserved</footer>
    </>
  );
};

export default About;
