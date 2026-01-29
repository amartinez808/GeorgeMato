import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const services = [
  {
    title: 'Brand Alignment & Positioning',
    description:
      'Translating brand DNA into a residential narrative that preserves integrity, elevates perception, and resonates with the most discerning global buyers.',
  },
  {
    title: 'Product Refinement',
    description:
      'Advising on architectural expression, amenity programming, and unit design to ensure every element reflects the brand\'s service ethos and lifestyle promise.',
  },
  {
    title: 'Pricing Strategy & Cadence',
    description:
      'Disciplined, data-informed pricing architecture designed to protect brand equity, optimize absorption, and maximize long-term value creation.',
  },
  {
    title: 'Sales Organization & Execution',
    description:
      'Building and leading elite sales teams trained to represent the brand with consistency, discretion, and excellence at every client touchpoint.',
  },
  {
    title: 'Go-to-Market Strategy',
    description:
      'End-to-end launch planning from early feasibility through sell-out—coordinating timing, messaging, and market entry to drive performance at scale.',
  },
];

const Developers = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />

      <main className="developers-page">
        <section className="developers-hero">
          <div className="developers-hero-inner">
            <span className="developers-label">For Real Estate Developers</span>
            <h1>Strategic Advisory for Branded Residences</h1>
            <p className="developers-intro">
              The Luxury Group is a strategic advisory sales and marketing development partner dedicated to the successful planning, positioning, and execution of branded residential developments at the highest level.
            </p>
          </div>
        </section>

        <section className="developers-content">
          <div className="developers-content-inner">
            <div className="developers-copy">
              <h2>Principal-Level Partnership</h2>
              <p>
                We partner with developers and brand stakeholders as a principal-level advisor—engaged early, aligned with the brand's DNA, and focused on translating brand promise into enduring residential value. Our role extends beyond sales to include product refinement, brand alignment, pricing strategy, and disciplined go-to-market execution—protecting brand integrity while driving performance.
              </p>
              <p>
                The firm is led by George Mato, a nationally respected luxury real-estate executive with more than 25 years at the forefront of ultra-luxury condominium development. Over the course of his career, George has personally driven more than $15 billion in cumulative career development sales, including over $3 billion across multiple Ritz-Carlton developments, representing some of the most successful branded-residence performances in the market.
              </p>
              <p>
                George brings rare depth at the intersection of luxury hospitality standards, residential product, and buyer psychology. He understands how service ethos, architectural expression, amenity programming, and operational narrative directly influence demand, pricing power, and long-term brand equity. His leadership ensures the residential extension of a brand is authentic, disciplined, and worthy of its name.
              </p>
            </div>
          </div>
        </section>

        <section className="developers-services">
          <div className="developers-services-inner">
            <h2>Full Lifecycle Advisory</h2>
            <p className="developers-services-subtitle">
              The Luxury Group advises branded-residence developers across the full lifecycle of a project—from early feasibility and brand positioning through product programming, pricing cadence, and sales execution.
            </p>
            <div className="developers-services-grid">
              {services.map((service) => (
                <div className="developers-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="developers-closing">
          <div className="developers-closing-inner">
            <p className="developers-promise">
              For developers and brands who recognize that brand is not marketing—it is a promise, The Luxury Group offers trusted leadership, strategic clarity, and proven execution at scale.
            </p>
            <p className="developers-tagline">
              <em>"Redefining Luxury Living in America's Number One Playground."</em>
            </p>
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Partner with The Luxury Group</h2>
          <p>
            Request a private consultation to discuss your branded-residence development, align on strategy, and explore how The Luxury Group can drive performance at every stage.
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

export default Developers;
