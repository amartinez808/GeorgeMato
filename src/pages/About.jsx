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
    title: 'Discretion-first philosophy',
    description:
      'Every engagement is private, data-led, and engineered to honor personal brand, timeline, and legacy objectives.',
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
              <h3>The Luxury Group — Real Estate Consultants</h3>
              <p className="about-mission">
                <em>“The finest waterfront residences curated personally.”</em>
              </p>
              <p>
                For George, luxury real estate has always been about human connection. Behind every penthouse, villa, or
                private marina berth sits a family vision — a rhythm of living that must feel effortless the moment the
                doors open.
              </p>
              <p>
                His role is to listen first. With a measured cadence, George translates wish lists into discreet search
                mandates, orchestrating architects, private lenders, and legal partners so clients can move decisively
                when the address is right.
              </p>
              <p>
                Whether he is hand-selecting Gulf-view sanctuaries or stewarding branded towers in Brickell, George’s
                calm confidence and proprietary intel position his clients ahead of the market — without the noise.
              </p>
              <p className="about-signature">– George Mato</p>
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
          <a className="cta" href="mailto:workwith@itsradai.com">
            Schedule consultation
          </a>
        </section>
      </main>

      <footer>© {currentYear} George Mato · All rights reserved</footer>
    </>
  );
};

export default About;
