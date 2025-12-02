import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header>
                <div className="nav-inner">
                    <div className="brand">
                        <span className="brand-wordmark">The Luxury Group</span>
                    </div>
                    <nav>
                        <Link to="/">Home</Link>
                        <a href="/#gallery">Residences</a>
                        <a href="/#approach">Approach</a>
                        <a href="/#contact">Contact</a>
                        <Link to="/about">About</Link>
                    </nav>
                    <a className="nav-cta" href="mailto:gmato23@gmail.com">
                        Schedule a Call
                    </a>
                    <button
                        className="mobile-toggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle navigation"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </header>

            <div className={`mobile-menu ${isMobileMenuOpen ? 'is-open' : ''}`}>
                <div className="mobile-menu-inner">
                    <nav className="mobile-nav">
                        <Link to="/" onClick={closeMobileMenu}>
                            Home
                        </Link>
                        <a href="/#gallery" onClick={closeMobileMenu}>
                            Residences
                        </a>
                        <a href="/#approach" onClick={closeMobileMenu}>
                            Approach
                        </a>
                        <a href="/#contact" onClick={closeMobileMenu}>
                            Contact
                        </a>
                        <Link to="/about" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Header;
