const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: "2rem 1rem",
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
            fontSize: "2.2rem",
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
            marginBottom: "3rem",
            fontSize: "1rem",
          }}
        >
          Have a project or idea? Let’s build something amazing together 🚀
        </p>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            alignItems: "stretch",
          }}
        >
          {/* Left Card */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: "400px",
              background: "#ffffff",
              padding: "1.2rem",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ marginBottom: "1rem", color: "#2c3e50" }}>
              Contact Info
            </h3>

            <p
              style={{ marginBottom: "1.5rem", color: "#555", lineHeight: 1.6 }}
            >
              I’m always open to new opportunities, collaborations, and creative
              ideas.
            </p>

            <p style={{ marginBottom: "0.6rem" }}>
              <strong>Email:</strong> yadava84569@gmail.com
            </p>
            <p style={{ marginBottom: "0.6rem" }}>
              <strong>Mobile:</strong> +91 7398 869 968
            </p>
            <p>
              <strong>Location:</strong> Noida, India
            </p>
          </div>

          {/* Right Card (Form) */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: "420px",
              background: "#ffffff",
              padding: "1.2rem",
              borderRadius: "14px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            }}
          >
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.8rem", color: "#2c3e50" }}>
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
                rows={4}
                required
                style={{ ...inputStyle, resize: "none" }}
              />

              <button
                type="submit"
                style={{
                  marginTop: "0.5rem",
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
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "1rem",
  outline: "none",
  textAlign: "center",
};

export default Contact;
