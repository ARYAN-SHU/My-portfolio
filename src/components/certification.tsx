import AWS from "../assets/AWS.jpeg";
import udemy from "../assets/udemy.png";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Udemy",
      description:
        "Hands-on program focused on building production-ready web applications using modern frontend and backend technologies, with emphasis on clean architecture and real-world use cases.",
      skills: [
        "React & Component-Based UI",
        "REST API Design",
        "Node.js / Backend Integration",
        "Database Design (SQL / NoSQL)",
        "Authentication & Authorization",
        "Deployment & Debugging",
      ],
      logo: udemy,
    },
    {
      title: "AWS Developer – Associate",
      issuer: "Amazon Web Services",
      description:
        "Industry-recognized certification validating the ability to design, develop, deploy, and troubleshoot scalable cloud-native applications on AWS.",
      skills: [
        "AWS Lambda & Serverless Architecture",
        "API Gateway & REST APIs",
        "S3, DynamoDB, RDS",
        "IAM & Security Best Practices",
        "CloudWatch Monitoring & Logging",
        "CI/CD & Application Deployment",
      ],
      logo: AWS,
    },
  ];

  return (
    <>
      <section id="certifications" className="cert-section">
        <div className="cert-container">
          <h2 className="cert-heading">Certifications</h2>
          <p className="cert-subheading">
            Credentials that demonstrate hands-on experience, architectural
            understanding, and real-world problem-solving skills.
          </p>

          <div className="cert-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card">
                <div className="cert-logo-wrapper">
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="cert-logo"
                  />
                </div>

                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>

                  <p className="cert-desc">{cert.description}</p>

                  <ul className="cert-skills">
                    {cert.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .cert-section {
          padding: 100px 20px;
          background: linear-gradient(180deg, #0f172a, #020617);
          color: #ffffff;
        }

        .cert-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .cert-heading {
          text-align: center;
          font-size: 2.6rem;
          margin-bottom: 12px;
        }

        .cert-subheading {
          text-align: center;
          font-size: 0.95rem;
          color: #94a3b8;
          margin-bottom: 70px;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 32px;
        }

        .cert-card {
          display: flex;
          gap: 20px;
          padding: 28px;
          background: linear-gradient(145deg, #1e293b, #0f172a);
          border-radius: 18px;
          border-left: 4px solid #38bdf8;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(56, 189, 248, 0.2);
        }

        .cert-logo-wrapper {
          flex-shrink: 0;
          height: 60px;
          width: 60px;
          background: #020617;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cert-logo {
          width: 38px;
          height: 38px;
          object-fit: contain;
        }

        .cert-info h3 {
          font-size: 1.15rem;
          margin-bottom: 4px;
        }

        .cert-issuer {
          font-size: 0.8rem;
          color: #38bdf8;
          display: inline-block;
          margin-bottom: 10px;
        }

        .cert-desc {
          font-size: 0.9rem;
          color: #cbd5f5;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .cert-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cert-skills li {
          font-size: 0.75rem;
          background: rgba(56, 189, 248, 0.12);
          color: #e0f2fe;
          padding: 6px 10px;
          border-radius: 999px;
        }

        @media (max-width: 480px) {
          .cert-card {
            flex-direction: column;
          }

          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Certifications;