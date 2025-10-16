import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const heroClips = [
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
  {
    id: 'gmvideo2',
    poster: '/hero-2.jpg',
    sources: [{ src: '/GMvideo2.mp4', type: 'video/mp4' }],
  },
  {
    id: 'gmvideo3',
    poster: '/naples.jpg',
    sources: [{ src: '/GMvideo3.mp4', type: 'video/mp4' }],
  },
  {
    id: 'gmvideo4',
    poster: '/esteroBay.webp',
    sources: [{ src: '/GMvideo4.mp4', type: 'video/mp4' }],
  },
  {
    id: 'gmvideo6',
    poster: '/fisherIsland.avif',
    sources: [{ src: '/GMvideo6.mp4', type: 'video/mp4' }],
  },
];

const galleryItems = [
  {
    id: 'brickell-terrace',
    src: '/hero-1.jpg',
    alt: 'Brickell penthouse terrace',
    caption: 'Brickell • Sky residence',
    variant: 'large',
  },
  {
    id: 'fisher-island',
    src: '/fisherIsland.avif',
    alt: 'Fisher Island private marina',
    caption: 'Fisher Island • Marina enclave',
  },
  {
    id: 'estero-bay',
    src: '/esteroBay.webp',
    alt: 'Estero Bay waterfront horizon',
    caption: 'Estero Bay • Gulf horizon',
  },
  {
    id: 'naples',
    src: '/naples.jpg',
    alt: 'Naples waterfront residence',
    caption: 'Naples • Waterfront estate',
  },
];

const approachHighlights = [
  {
    title: 'Curated discovery',
    description:
      'Confidential briefings, architectural context, and tailored itineraries that surface only the residences that matter.',
  },
  {
    title: 'Intelligence at negotiation',
    description:
      'Proprietary comps, association insight, and pacing strategy engineered to secure advantage without noise.',
  },
  {
    title: 'Concierge orchestration',
    description:
      'Introductions to elite legal, financial, and design partners so every detail aligns with lifestyle and legacy.',
  },
];

const HERO_ROTATION_INTERVAL = 8000;

const Home = () => {
  const heroRef = useRef(null);
  const statusRef = useRef(null);
  const videoRefs = useRef([]);
  const location = useLocation();

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

    let activeIndex = 0;
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
      const currentVideo = videos[activeIndex];
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

      activeIndex = nextIndex;
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
        playIndex(activeIndex).catch(() => {
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
      const nextIndex = (activeIndex + 1) % videos.length;
      playIndex(nextIndex).catch(() => {
        // handled in playIndex
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
          playIndex((index + 1) % videos.length).catch(() => {});
          activeTimeouts.delete(timerId);
        }, 1200);
        activeTimeouts.add(timerId);
      };

      const handleError = () => {
        console.warn('[hero] error event', video.currentSrc);
        showStatus('Media temporarily unavailable');
        clearRotationTimer();
        const timerId = window.setTimeout(() => {
          playIndex((index + 1) % videos.length).catch(() => {});
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

    markActive(activeIndex);
    playIndex(activeIndex).catch(() => {
      // autoplay blocked handled in playIndex
    });

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

  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <div className="nav-inner">
          <div className="brand">George Mato | The Luxury Group</div>
          <nav>
            <a href="#gallery">Residences</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
            <Link to="/about">About</Link>
          </nav>
        </div>
      </header>

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
          <div className="hero-overlay">
            <span className="hero-label">Luxury condominium consultant</span>
            <h1>Waterfront residences, curated personally.</h1>
            <p>
              From Brickell penthouses to Ritz-Carlton coastal sanctuaries, George Mato secures the rarest addresses for
              discerning collectors.
            </p>
            <div className="hero-actions">
              <a className="hero-link" href="mailto:workwith@itsradai.com">
                Private consultation
              </a>
              <a className="hero-link" href="#gallery">
                View portfolio
              </a>
            </div>
            <span className="hero-status" ref={statusRef} />
          </div>
        </section>

        <section className="gallery" id="gallery">
          <div className="gallery-header">
            <h2>Recent vantage points</h2>
            <p className="gallery-subtitle">
              Sightlines, sunset exposures, and transformative amenities defining Miami and Gulf-front living.
            </p>
          </div>
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                className={`gallery-item${item.variant === 'large' ? ' large' : ''}`}
              >
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
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
          <h2>Let’s design your next move</h2>
          <p>Reserve a discreet conversation with George Mato to outline objectives, timing, and the residences that fit.</p>
          <a className="cta" href="mailto:workwith@itsradai.com">
            Request consultation
          </a>
        </section>
      </main>

      <footer>© {currentYear} George Mato · All rights reserved</footer>
    </>
  );
};

export default Home;
