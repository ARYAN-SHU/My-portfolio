const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <h3>Aryan Yadav</h3>
            <p>Software Engineer · Full Stack & Python</p>
          </div>

          <div className="footer-right">
            <p>© {year} Aryan Yadav</p>
            <span>Built with React</span>
          </div>
        </div>
      </footer>

      <style>{`
        /* ===== FOOTER BASE ===== */
        .footer {
          background: #0f172a;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 32px 16px;
          color: #cbd5f5;
        }

        .footer-container {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        /* ===== LEFT ===== */
        .footer-left h3 {
          margin: 0;
          font-size: 1.05rem;
          font-weight: 600;
          color: #e5e7eb;
        }

        .footer-left p {
          margin: 4px 0 0;
          font-size: 0.85rem;
          color: #94a3b8;
        }

        /* ===== RIGHT ===== */
        .footer-right {
          text-align: right;
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .footer-right span {
          display: block;
          margin-top: 2px;
          color: #64748b;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }

          .footer-right {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;