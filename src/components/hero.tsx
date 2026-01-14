const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div>
          <h1
            style={{
              fontSize: "3.2rem",
              marginBottom: "15px",
              lineHeight: "1.2",
            }}
          >
            Hi, I’m <span style={{ color: "#38bdf8" }}>Aryan Yadav</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "16px",
              color: "#cbd5f5",
              fontWeight: "500",
            }}
          >
            Full Stack Developer | Python Developer | Problem Solver
          </p>

          <p
            style={{
              fontSize: "1rem",
              marginBottom: "30px",
              color: "#e5e7eb",
              maxWidth: "520px",
              lineHeight: "1.6",
            }}
          >
            I create amazing web experiences and solve complex problems with
            clean, efficient code.
          </p>

          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="#projects"
              style={{
                padding: "14px 28px",
                background: "#38bdf8",
                color: "#0f172a",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              View My Work
            </a>

            <a
              href="#contact"
              style={{
                padding: "14px 28px",
                border: "2px solid #38bdf8",
                color: "#38bdf8",
                borderRadius: "8px",
                fontWeight: "600",
                textDecoration: "none",
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              padding: "6px",
              background: "linear-gradient(135deg, #38bdf8, #6366f1)",
            }}
          >
            <img
              src="../assets/resume_Pic.jpg"
              alt="Aryan Yadav"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                background: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;