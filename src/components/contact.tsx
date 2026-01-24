import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// 🔐 EmailJS credentials
const SERVICE_ID = "service_a1jjjt8";
const TEMPLATE_ID = "template_7015wkl";
const PUBLIC_KEY = "98AlnFjNhXEd-_k9i";

const Contact = () => {
  // ✅ Properly typed ref
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);

  // ✅ Properly typed submit event
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || !formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      )
      .then(() => {
        toast.success(
          "Message sent successfully. I’ll get back to you soon.",
          {
            position: "bottom-right",
            autoClose: 4000,
            theme: "light",
          }
        );
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error(
          "Failed to send message. Please try again.",
          {
            position: "bottom-right",
            autoClose: 4000,
            theme: "light",
          }
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="contact-container">
          <header className="contact-header">
            <h2>Get in Touch</h2>
            <p>
              Open to opportunities, collaborations, and meaningful
              conversations.
            </p>
          </header>

          <div className="contact-grid">
            {/* INFO */}
            <aside className="contact-card contact-info">
              <h3>Contact Information</h3>
              <p className="contact-muted">
                Reach out for roles, freelance projects, or technical
                discussions.
              </p>

              <div className="contact-kv">
                <span>Email</span>
                <strong>yadava84569@gmail.com</strong>
              </div>
              <div className="contact-kv">
                <span>Phone</span>
                <strong>+91 7398869968</strong>
              </div>
              <div className="contact-kv">
                <span>Location</span>
                <strong>Noida, India</strong>
              </div>
            </aside>

            {/* FORM */}
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="contact-card contact-form"
            >
              <h3>Send a Message</h3>

              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending…" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <ToastContainer />

      <style>{`
        /* ===== CONTACT (SCOPED ONLY) ===== */
        .contact {
          padding: clamp(72px, 10vh, 120px) 16px;
          background: linear-gradient(180deg, #ffffff, #f1f5f9);
          color: #0f172a;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 56px;
        }

        .contact-header h2 {
          font-size: clamp(2rem, 5vw, 2.6rem);
          margin-bottom: 8px;
        }

        .contact-header p {
          color: #64748b;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .contact-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 28px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
        }

        .contact-card h3 {
          color: #2563eb;
          margin-bottom: 12px;
        }

        .contact-muted {
          color: #64748b;
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .contact-kv {
          margin-bottom: 14px;
        }

        .contact-kv span {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
        }

        .contact-kv strong {
          font-size: 0.95rem;
          font-weight: 600;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .contact-form input,
        .contact-form textarea {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          color: #0f172a;
          padding: 12px 14px;
          border-radius: 12px;
          outline: none;
          font-size: 0.95rem;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.12);
        }

        .contact-form button {
          margin-top: 6px;
          padding: 12px 16px;
          border-radius: 12px;
          border: none;
          font-weight: 700;
          background: linear-gradient(135deg, #2563eb, #60a5fa);
          color: #ffffff;
          cursor: pointer;
        }

        .contact-form button:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;