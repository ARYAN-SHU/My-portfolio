const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: "80px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#0f172a",
          }}
        >
          Skills & Technologies
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {/* Frontend */}
          <div
            style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "#38bdf8",
                fontSize: "1.4rem",
              }}
            >
              Frontend
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {["React", "TypeScript", "HTML / CSS", "JavaScript", "Vite"].map(
                (skill, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#334155",
                      fontSize: "1rem",
                    }}
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Backend */}
          <div
            style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "#6366f1",
                fontSize: "1.4rem",
              }}
            >
              Backend
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Node.js",
                "Express",
                "Python",
                "PostgreSQL",
                "MongoDB",
              ].map((skill, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #e2e8f0",
                    color: "#334155",
                    fontSize: "1rem",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div
            style={{
              background: "#f8fafc",
              padding: "30px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                marginBottom: "20px",
                color: "#22c55e",
                fontSize: "1.4rem",
              }}
            >
              Tools
            </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Git", "Docker", "AWS", "VS Code", "Figma"].map(
                (skill, index) => (
                  <li
                    key={index}
                    style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #e2e8f0",
                      color: "#334155",
                      fontSize: "1rem",
                    }}
                  >
                    {skill}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;