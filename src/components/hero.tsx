import resumePic from "../assets/resume_Pic.jpg";

const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="hero-container">
          {/* LEFT */}
          <div className="hero-content">
            <h1>
              Hi, I’m <span>Aryan Yadav</span>
            </h1>

            <h2>Full Stack Developer · Python Developer · Problem Solver</h2>

            <p>
              I build scalable web applications, design efficient backend
              systems, and solve real-world problems with clean, maintainable
              code.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                View My Work
              </a>
              <a href="#contact" className="secondary-btn">
                Get In Touch
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-image">
            <div className="image-frame">
              <img src={resumePic} alt="Aryan Yadav" />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== HERO SECTION ===== */
        .hero {
          min-height: calc(100vh - 64px); /* header-safe */
          padding: 80px 16px 40px;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: #ffffff;
          display: flex;
          align-items: center;
          overflow: hidden; /* 🔑 PREVENT BLEED */
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: clamp(24px, 5vw, 60px);
        }

        /* ===== LEFT CONTENT ===== */
        .hero-content h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .hero-content h1 span {
          color: #38bdf8;
        }

        .hero-content h2 {
          font-size: clamp(0.9rem, 2.6vw, 1.25rem);
          font-weight: 500;
          color: #cbd5f5;
          margin-bottom: 14px;
        }

        .hero-content p {
          font-size: 1rem;
          line-height: 1.6;
          color: #e5e7eb;
          max-width: 520px;
          margin-bottom: 26px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-btn {
          padding: 12px 22px;
          background: #38bdf8;
          color: #0f172a;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
        }

        .secondary-btn {
          padding: 12px 22px;
          border: 2px solid #38bdf8;
          color: #38bdf8;
          border-radius: 10px;
          font-weight: 600;
          text-decoration: none;
        }

        /* ===== RIGHT IMAGE ===== */
        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-frame {
          width: min(320px, 90%);
          padding: 8px;
          border-radius: 22px;
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          animation: float 5s ease-in-out infinite;
          max-height: 380px; /* 🔑 HARD LIMIT */
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          border-radius: 16px;
          object-fit: cover;
          background: #ffffff;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); } /* controlled motion */
        }

        /* ===== TABLET ===== */
        @media (max-width: 900px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-actions {
            justify-content: center;
          }

          .image-frame {
            max-height: 300px;
          }
        }

        /* ===== MOBILE ===== */
        @media (max-width: 480px) {
          .hero {
            padding-top: 70px;
          }

          .image-frame {
            width: 200px;
            max-height: 240px;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;