const Contact = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #f8f9fa, #eef2f7)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#2c3e50",
          }}
        >
          Get In Touch
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            marginBottom: "50px",
            fontSize: "1rem",
          }}
        >
          Have a project or idea? Let’s build something amazing together 🚀
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              background: "#ffffff",
              padding: "32px",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
                color: "#2c3e50",
              }}
            >
              Contact Info
            </h3>

            <p
              style={{
                marginBottom: "20px",
                color: "#555",
                lineHeight: "1.6",
              }}
            >
              I’m always open to new opportunities, collaborations, and creative ideas.
            </p>

            <p style={{ marginBottom: "10px" }}>
              <strong>Email:</strong> your.email@example.com
            </p>
            <p>
              <strong>Location:</strong> India
            </p>
          </div>

          {/* Right Side */}
          <form
            style={{
              background: "#ffffff",
              padding: "32px",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "#2c3e50",
              }}
            >
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              style={inputStyle}
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              style={inputStyle}
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              required
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                fontSize: "1rem",
                fontWeight: "600",
                background: "#3498db",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "0.95rem",
  outline: "none",
};

export default Contact;