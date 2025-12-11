import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const accolades = [
  {
    title: '25+ years of representation',
    description:
      'Guiding South Florida\'s most discerning buyers through the region\'s finest real estate with quiet mastery and unwavering commitment.',
  },
  {
    title: 'Award-Winning Specialist',
    description:
      'Recognized luxury brand real estate development specialist serving high-net-worth individuals, professional athletes, global executives, and celebrities.',
  },
  {
    title: 'President, The Luxury Group',
    description:
      'Licensed Realtor with specialized expertise in luxury waterfront properties and high-end branded condominium developments.',
  },
  {
    title: 'White-Glove Service',
    description:
      'Exceptional service isn\'t extra, it is luxury and all that we know. Calm, private, and intensely client-first approach.',
  },
  {
    title: 'Ritz-Carlton Expertise',
    description:
      'Distinguished career representing multiple Ritz-Carlton luxury developments with deep understanding of branded living.',
  },
  {
    title: 'Discreet Expertise',
    description:
      'Built reputation on quiet mastery, discreet expertise, and unwavering commitment to each client\'s goals and legacy.',
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
              src="/george-mato-professional.jpg"
              alt="George Mato, principal of The Luxury Group"
              className="about-headshot"
              loading="lazy"
            />
            <div className="about-copy">
              <h2>About George Mato</h2>
              <h3>President, The Luxury Group — Licensed Realtor</h3>
              <p className="about-mission">
                <em>"In luxury real estate, serving my clients isn’t just a responsibility, it’s the highest honor and the foundation of every relationship I build, because behind every transaction is a life, a dream, and a future I’m entrusted to help shape."</em>
              </p>
              <p>
                George Mato is an award-winning luxury brand real estate development specialist with over 25 years of experience guiding South Florida's most discerning buyers through the region's finest real estate. His reputation is built on quiet mastery, discreet expertise, and unwavering commitment to each client's goals.
              </p>
              <p>
                As President of The Luxury Group and a Licensed Realtor, George serves high-net-worth individuals, professional athletes, global executives, and celebrities seeking exceptional properties throughout South Florida and Southwest Florida. His approach is calm, private, and intensely client-first, delivering white-glove service that defines true luxury representation.
              </p>
              <p>
                With a distinguished career representing multiple Ritz-Carlton luxury developments, George brings the foresight, insight, and proven expertise that discerning buyers depend on. His deep understanding of luxury living, paired with his ability to elevate brands and guide multimillion-dollar development projects, has established him as the go-to expert for clients who expect the very best.
              </p>
              <p>
                For George, exceptional service isn't extra—it is luxury and all that he knows. Through The Luxury Group, he continues to define excellence in the luxury real estate marketplace, serving one extraordinary client, one remarkable property, and one inspired partnership at a time.
              </p>
              <p>
                A true fixture of the city, George's deep local history even includes a role in the original <em>Miami Vice</em>, reflecting his lifelong connection to the vibrant culture of South Florida.
              </p>
              <p className="about-signature">– George Mato, Licensed Realtor # SL580638</p>
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
            <a className="cta" href="mailto:george@theluxurygrouprealestate.com">
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
