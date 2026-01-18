import resumePic from '../assets/resume_Pic.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      style={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px 15px",
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
              marginBottom: "10px",
              lineHeight: "1.2",
            }}
          >
            Hi, I’m <span style={{ color: "#38bdf8" }}>Aryan Yadav</span>
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              marginBottom: "10px",
              color: "#cbd5f5",
              fontWeight: "500",
            }}
          >
            Full Stack Developer | Python Developer | Problem Solver
          </p>

          <p
            style={{
              fontSize: "1rem",
              marginBottom: "25px",
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
                padding: "10px 20px",
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
                padding: "10px 20px",
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
              width: "70%",
              height: "fit-content",
              borderRadius: "1rem",
              marginTop: "20px",
              padding: "0.7rem",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(135deg, rgb(150 159 164), rgb(99, 102, 241))",
            }}
          >
            <img
              src={resumePic}
              alt="Aryan Yadav"
              style={{
                width: "100%",
                height: "70%",
                borderRadius: "20%",
                justifyContent: "center",
                alignItems: "center",
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