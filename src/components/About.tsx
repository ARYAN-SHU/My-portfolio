const About = () => {
  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "10+", label: "Projects Completed" },
    { value: "20+", label: "Technologies Worked With" },
  ];

  return (
    <>
      <section id="about" className="about">
        <div className="about-container">
          <h2 className="about-heading">About Me</h2>
          <p className="about-subheading">
            A snapshot of my experience and technical background.
          </p>

          <div className="about-content">
            {/* TEXT */}
            <div className="about-text">
              <p>
                I am a passionate software developer focused on building clean,
                scalable, and maintainable web applications. I enjoy solving
                real-world problems through efficient and thoughtful code.
              </p>
              <p>
                I continuously explore modern technologies, system design, and
                best practices to improve the quality of the solutions I build.
              </p>
            </div>

            {/* STATS */}
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* ===== BASE ===== */
        .about {
          padding: clamp(60px, 10vh, 100px) 16px;
          background: #f8fafc;
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-heading {
          text-align: center;
          font-size: clamp(2rem, 5vw, 2.7rem);
          color: #0f172a;
          margin-bottom: 6px;
        }

        .about-subheading {
          text-align: center;
          font-size: 0.95rem;
          color: #64748b;
          margin-bottom: 50px;
        }

        /* ===== LAYOUT ===== */
        .about-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: clamp(30px, 6vw, 70px);
          align-items: center;
        }

        .about-text {
          order: 1;
        }

        .about-text p {
          font-size: 1rem;
          line-height: 1.7;
          color: #334155;
          margin-bottom: 14px;
        }

        /* ===== STATS (ROW) ===== */
        .about-stats {
          order: 2;
          display: flex;
          gap: 16px;
          justify-content: space-between;
          align-items: stretch;
          flex-wrap: nowrap;
        }

        .stat-card {
          flex: 1;
          background: #ffffff;
          padding: 16px 10px;
          border-radius: 14px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.08);
        }

        .stat-card h3 {
          font-size: 1.9rem;
          color: #38bdf8;
          margin-bottom: 4px;
        }

        .stat-card p {
          font-size: 0.8rem;
          font-weight: 500;
          color: #475569;
        }

        /* ===== TABLET & MOBILE ===== */
        @media (max-width: 900px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-stats {
            order: 1; /* stats FIRST */
            justify-content: center;
          }

          .about-text {
            order: 2;
            text-align: center;
          }

          .about-text p {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* VERY SMALL SCREENS (SAFETY) */
        @media (max-width: 360px) {
          .about-stats {
            flex-wrap: wrap; /* only if absolutely needed */
          }
        }
      `}</style>
    </>
  );
};

export default About;