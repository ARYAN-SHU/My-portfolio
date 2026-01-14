const Projects = () => {
  const projects = [
    "E-commerce Platform",
    "Task Manager",
    "Weather App",
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "80px 20px",
        backgroundColor: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#0f172a",
          }}
        >
          My Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((title, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "180px",
                  background:
                    "linear-gradient(135deg, #38bdf8, #6366f1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                {title}
              </div>

              <div style={{ padding: "20px" }}>
                <h3 style={{ marginBottom: "10px", color: "#0f172a" }}>
                  {title}
                </h3>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "0.95rem",
                    marginBottom: "16px",
                  }}
                >
                  Modern web application built using latest technologies.
                </p>

                <div style={{ display: "flex", gap: "12px" }}>
                  <a
                    href="#"
                    style={{
                      padding: "8px 16px",
                      background: "#38bdf8",
                      color: "#0f172a",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    style={{
                      padding: "8px 16px",
                      border: "2px solid #38bdf8",
                      color: "#38bdf8",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;