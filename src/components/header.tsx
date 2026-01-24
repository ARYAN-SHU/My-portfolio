import { useEffect, useState } from "react";

const Header = () => {
  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "certifications",
    "contact",
  ];

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      navItems.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? "shrink" : ""}`}>
        <nav className="nav">
          <div className="logo">My Portfolio</div>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={active === item ? "active" : ""}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <style>{`
        :root {
          --accent: #38bdf8;
          --bg: rgba(15, 23, 42, 0.9);
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: var(--bg);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          transition: padding 0.25s ease;
        }

        .header.shrink {
          padding-top: 2px;
          padding-bottom: 2px;
        }

        .nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: clamp(10px, 2vw, 16px) clamp(12px, 3vw, 20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .logo {
          font-size: clamp(1rem, 2.5vw, 1.4rem);
          font-weight: 700;
          color: var(--accent);
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          gap: clamp(10px, 2vw, 26px);
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .nav-links::-webkit-scrollbar {
          display: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #e5e7eb;
          font-size: clamp(0.7rem, 2vw, 0.95rem);
          font-weight: 500;
          white-space: nowrap;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-links a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        .nav-links a.active {
          color: var(--accent);
        }

        /* Ultra-small screens */
        @media (max-width: 420px) {
          .logo {
            font-size: 0.95rem;
          }

          .nav-links a {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </>
  );
};

export default Header;