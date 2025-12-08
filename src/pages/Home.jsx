import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const heroClips = [
  {
    id: 'gmvideo2',
    poster: '/hero-2.jpg',
    sources: [{ src: '/GMvideo2.mp4', type: 'video/mp4' }],
  },
  {
    id: 'uhd-video',
    poster: '/hero-1.jpg',
    sources: [{ src: '/15768406-uhd_4096_2160_24fps.mp4', type: 'video/mp4' }],
  },
  {
    id: 'brickell',
    poster: '/hero-1.jpg',
    sources: [{ src: '/hero-1.mp4', type: 'video/mp4' }],
  },
  {
    id: 'gulf',
    poster: '/hero-3.jpg',
    sources: [{ src: '/hero-3.mp4', type: 'video/mp4' }],
  },
];

const galleryItems = [
  {
    id: 'luxury-yachts',
    src: '/luxury-yachts.jpg',
    alt: 'Luxury yachts docked at exclusive marina',
    variant: 'large',
  },
  {
    id: 'infinity-pool',
    src: '/infinity-pool.jpg',
    alt: 'Stunning infinity pool overlooking the ocean',
    variant: 'large',
  },
  {
    id: 'luxury-waterfront',
    src: '/luxury-waterfront.jpg',
    alt: 'Exclusive waterfront luxury residences',
  },
  {
    id: 'luxury-condos',
    src: '/luxury-condos.jpg',
    alt: 'Premium high-rise condominium development',
    variant: 'large',
  },
  {
    id: 'golf-course',
    src: '/golf-course.jpg',
    alt: 'Championship golf course at luxury resort',
  },
  {
    id: 'hotel-view',
    src: '/hotel-view.jpg',
    alt: 'Breathtaking views from luxury hotel residence',
  },
  {
    id: 'advisor-marina',
    src: '/georgeRC.webp',
    variant: 'large',
    alt: 'Advisor overlooking marina from private balcony',
  },
  {
    id: 'marina-dusk',
    src: '/RCREB Ritz Marina Final.jpg',
    variant: 'large',
    alt: 'Seaside marina with luxury residences at dusk',
  },
];

const approachHighlights = [
  {
    title: 'Curated discovery',
    description:
      'Confidential briefings and tailored itineraries that surface only the residences that matter.',
  },
  {
    title: 'Intelligence at negotiation',
    description:
      'Proprietary comps and pacing strategy engineered to secure advantage without noise.',
  },
  {
    title: 'Concierge orchestration',
    description:
      'Introductions to elite legal, financial, and design partners aligned with your lifestyle and legacy.',
  },
];

const HERO_ROTATION_INTERVAL = 12000;

const Home = () => {
  const heroRef = useRef(null);
  const statusRef = useRef(null);
  const videoRefs = useRef([]);
  const activeIndexRef = useRef(0);
  const location = useLocation();
  const [heroOverlayOpacity, setHeroOverlayOpacity] = useState(1);

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const videos = videoRefs.current.filter(Boolean);
    if (!videos.length) {
      return undefined;
    }

    videos.forEach((video) => {
      video.muted = true;
      video.setAttribute('muted', '');
      video.playsInline = true;
      video.setAttribute('playsinline', '');
      video.autoplay = false;
      video.preload = 'auto';
    });

    let awaitingInteraction = false;
    let rotationTimer = null;
    const cleanupFns = [];
    const activeTimeouts = new Set();

    const heroNode = heroRef.current;

    const showStatus = (message = '') => {
      if (statusRef.current) {
        statusRef.current.textContent = message;
      }
    };

    const clearRotationTimer = () => {
      if (rotationTimer) {
        window.clearTimeout(rotationTimer);
        rotationTimer = null;
      }
    };

    const markActive = (nextIndex) => {
      const currentVideo = videos[activeIndexRef.current];
      const nextVideo = videos[nextIndex];
      if (!nextVideo) {
        return;
      }

      nextVideo.classList.add('is-active');

      if (currentVideo && currentVideo !== nextVideo) {
        const timeoutId = window.setTimeout(() => {
          currentVideo.classList.remove('is-active');
          try {
            currentVideo.pause();
            currentVideo.currentTime = 0;
          } catch (error) {
            console.debug('[hero] reset failed', error);
          }
          activeTimeouts.delete(timeoutId);
        }, 1600);
        activeTimeouts.add(timeoutId);
      }

      activeIndexRef.current = nextIndex;
    };

    const handlePlaybackFailure = (error) => {
      if (error?.name === 'NotAllowedError') {
        handleAutoplayBlocked();
      } else {
        console.warn('[hero] playback error', error);
        showStatus('Media temporarily unavailable');
        const retryTimer = window.setTimeout(() => {
          advance();
          activeTimeouts.delete(retryTimer);
        }, 800);
        activeTimeouts.add(retryTimer);
      }
      return Promise.reject(error);
    };

    const playIndex = (index) => {
      const target = videos[index];
      if (!target) {
        return Promise.reject(new Error('invalid video index'));
      }

      clearRotationTimer();

      try {
        target.currentTime = 0;
      } catch (error) {
        console.debug('[hero] unable to seek', error);
      }

      const attempt = target.play();
      if (attempt && typeof attempt.then === 'function') {
        return attempt
          .then(() => {
            markActive(index);
            showStatus('');
            scheduleNext();
          })
          .catch((error) => handlePlaybackFailure(error));
      }

      markActive(index);
      showStatus('');
      scheduleNext();
      return Promise.resolve();
    };

    const advance = () => {
      const nextIndex = (activeIndexRef.current + 1) % videos.length;
      playIndex(nextIndex).catch(() => { });
    };

    const scheduleNext = () => {
      clearRotationTimer();
      rotationTimer = window.setTimeout(() => {
        advance();
      }, HERO_ROTATION_INTERVAL);
    };

    const handleAutoplayBlocked = () => {
      if (awaitingInteraction) {
        return;
      }

      awaitingInteraction = true;
      heroNode?.classList.add('awaiting-autoplay');
      showStatus('Tap to enable playback');
      clearRotationTimer();

      const resume = () => {
        document.removeEventListener('pointerdown', resume, true);
        document.removeEventListener('keydown', resume, true);
        awaitingInteraction = false;
        heroNode?.classList.remove('awaiting-autoplay');
        showStatus('');
        playIndex(activeIndexRef.current).catch(() => {
          showStatus('Media temporarily unavailable');
        });
      };

      document.addEventListener('pointerdown', resume, { once: true, capture: true });
      document.addEventListener('keydown', resume, { once: true, capture: true });

      cleanupFns.push(() => {
        document.removeEventListener('pointerdown', resume, true);
        document.removeEventListener('keydown', resume, true);
      });
    };

    videos.forEach((video, index) => {
      const handleEnded = () => {
        if (document.hidden) {
          return;
        }
        showStatus('');
        clearRotationTimer();
        const timerId = window.setTimeout(() => {
          playIndex((index + 1) % videos.length).catch(() => { });
          activeTimeouts.delete(timerId);
        }, 1200);
        activeTimeouts.add(timerId);
      };

      const handleError = () => {
        console.warn('[hero] error event', video.currentSrc);
        showStatus('Media temporarily unavailable');
        clearRotationTimer();
        const timerId = window.setTimeout(() => {
          playIndex((index + 1) % videos.length).catch(() => { });
          activeTimeouts.delete(timerId);
        }, 1200);
        activeTimeouts.add(timerId);
      };

      video.addEventListener('ended', handleEnded);
      video.addEventListener('error', handleError);

      cleanupFns.push(() => {
        video.removeEventListener('ended', handleEnded);
        video.removeEventListener('error', handleError);
      });
    });

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearRotationTimer();
      } else if (!awaitingInteraction) {
        scheduleNext();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    cleanupFns.push(() => document.removeEventListener('visibilitychange', handleVisibilityChange));

    markActive(activeIndexRef.current);
    playIndex(activeIndexRef.current).catch(() => { });

    return () => {
      clearRotationTimer();
      activeTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      activeTimeouts.clear();
      cleanupFns.forEach((fn) => fn());
      heroNode?.classList.remove('awaiting-autoplay');
      showStatus('');
      videos.forEach((video) => {
        video.classList.remove('is-active');
        try {
          video.pause();
        } catch (error) {
          console.debug('[hero] pause failed on cleanup', error);
        }
      });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroNode = heroRef.current;
      if (!heroNode) {
        return;
      }

      const heroHeight = heroNode.offsetHeight || 1;
      const fadeDistance = heroHeight * 0.6;
      const scrolled = window.scrollY;
      const nextOpacity = Math.max(0, Math.min(1, 1 - scrolled / fadeDistance));
      setHeroOverlayOpacity(nextOpacity);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const currentYear = new Date().getFullYear();

  return (
    <>
      <Header />

      <main>
        <section className="hero" id="top" ref={heroRef}>
          <div className="hero-media" aria-hidden="true">
            {heroClips.map((clip, index) => (
              <video
                key={clip.id}
                className="hero-video"
                preload="auto"
                muted
                playsInline
                poster={clip.poster}
                ref={(node) => {
                  videoRefs.current[index] = node || undefined;
                }}
              >
                {clip.sources.map((source) => (
                  <source key={source.src} src={source.src} type={source.type} />
                ))}
              </video>
            ))}
          </div>
          <div className="hero-overlay" style={{ opacity: heroOverlayOpacity }}>
            <div className="hero-content">
              <div className="hero-intro">
                <span className="hero-label">Private Waterfront Advisory — Personally Curated Branded Living for Miami & Naples</span>
              </div>
              <h1>Your Next Chapter In Luxury Living Starts Here</h1>
              <p className="hero-subline">
                Securing the rarest addresses with quiet, data-led representation.
              </p>
              <div className="hero-actions">
                <a className="cta hero-primary" href="mailto:gmato23@gmail.com">
                  Talk with George
                </a>
                <a className="hero-cta-secondary" href="tel:7863017500">
                  <span aria-hidden="true">☎</span>
                  <span className="hero-cta-secondary-text">786-301-7500</span>
                </a>
                <a className="hero-link" href="#gallery">
                  Explore portfolio
                </a>
              </div>
            </div>
            <div className="hero-persona">
              <img
                src="/george-mato-professional.jpg"
                alt="George Mato"
                className="hero-persona-image"
                loading="lazy"
              />
              <div className="hero-persona-body">
                <p className="hero-persona-quote">“Every residence is matched to lifestyle, legacy, and discretion.”</p>
                <p className="hero-persona-meta">George Mato — Principal Advisor</p>
              </div>
            </div>
            <span className="hero-status" ref={statusRef} />
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="gallery-header">
            <h2>Portfolio studies</h2>
            <p className="gallery-subtitle">
              Curated to express the calm confidence of coastal living.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className={`gallery-item${item.variant === 'large' ? ' large' : ''}`}
                data-id={item.id}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </section>

        <section className="approach" id="approach">
          <h2>Quiet, data-led representation</h2>
          <div className="approach-grid">
            {approachHighlights.map((highlight) => (
              <div className="approach-card" key={highlight.title}>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Let's design your next move</h2>
          <p>Reserve a discreet conversation with George Mato to outline objectives, timing, and the residences that fit.</p>
          <div className="contact-actions">
            <a className="cta" href="mailto:gmato23@gmail.com">
              Request consultation
            </a>
          </div>
        </section>
      </main>

      <footer>© {currentYear} George Mato · All rights reserved</footer>
    </>
  );
};

export default Home;
