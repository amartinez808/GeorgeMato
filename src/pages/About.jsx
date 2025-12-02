import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

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
      <Header />

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
                <em>"Every residence is matched to lifestyle, legacy, and discretion."</em>
              </p>
              <p>
                George Mato is an award-winning luxury brand real estate development specialist and the visionary Founder of The Luxury Group. As a trusted advisor to high-net-worth individuals, professional athletes, and celebrities seeking their dream vacation homes throughout South Florida and Southwest Florida, George delivers a level of discretion, care, and world-class service that sets him apart. His approach is personal, strategic, and always focused on creating an exceptional and seamless experience for every client.
              </p>
              <p>
                With a distinguished career representing multiple Ritz-Carlton luxury developments, George brings the foresight, insight, and proven expertise that discerning buyers depend on. His deep understanding of luxury living, paired with his ability to elevate brands and guide multimillion-dollar development projects, has established him as the go-to expert for clients who expect the very best in sophisticated, seasoned representation.
              </p>
              <p>
                Through The Luxury Group, George continues to define excellence in the luxury real estate and development marketplace, serving one extraordinary client, one remarkable property, and one inspired partnership at a time. Clients who choose to work with George gain more than a market leader; they gain a dedicated advocate committed to bringing their vision of luxury living to life.
              </p>
              <p>
                A true fixture of the city, George’s deep local history even includes a role in the original <em>Miami Vice</em>, reflecting his lifelong connection to the vibrant culture of South Florida.
              </p>
              <p className="about-signature">– George Mato, Licensed Realtor</p>
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
            <a className="cta" href="mailto:gmato23@gmail.com">
              Schedule consultation
            </a>
          </div>
        </section>
      </main>

      <footer>© {currentYear} George Mato · All rights reserved</footer>
    </>
  );
};

export default About;
