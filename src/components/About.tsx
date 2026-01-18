const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: "5px 4rem",
        background: "#ffffff",
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
            fontSize: "2.7rem",
            marginBottom: "7px",
            color: "#2c3e50",
          }}
        >
          About Me
        </h2>

        <div
          style={{
            display: "inline-flex",
            gap: "70px",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {/* About Text */}
          <div style={{
            width: "31%"
          }} >
            <p
              style={{
                fontSize: "1.05rem",
                marginBottom: "10px",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              I'm a passionate developer with experience in building modern web
              applications. I love turning ideas into reality through code and
              design.
            </p>

            <p
              style={{
                fontSize: "1.05rem",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              When I'm not coding, I explore new technologies and contribute to
              open-source projects.
            </p>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              width:"32%",
              gridTemplateColumns: "1fr",
              gap: "20px",

            }}
          >
            {[
              { value: "2+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "20+", label: "Worked On Technologies" },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  background: "#f8f9fa",
                  padding: "10px",
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                }}
              >
                <h3
                  style={{
                    fontSize: "2.2rem",
                    color: "#3498db",
                    marginBottom: "4px",
                  }}
                >
                  {stat.value}
                </h3>
                <p
                  style={{
                    color: "#555",
                    fontWeight: "500",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
