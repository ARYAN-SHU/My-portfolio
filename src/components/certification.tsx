const Certifications = () => {
  const certifications = [
    "Full Stack Web Development Udemy",
    "AWS developer Associate"
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#0f172a",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.4rem",
            marginBottom: "40px",
          }}
        >
          Certifications
        </h2>

        <div style={{ display: "grid", gap: "20px" }}>
          {certifications.map((cert, index) => (
            <div
              key={index}
              style={{
                padding: "20px",
                background: "#1e293b",
                borderRadius: "10px",
                borderLeft: "5px solid #38bdf8",
                fontSize: "1rem",
              }}
            >
              <div>
                <span>{cert}</span>
                <span>
                  <img src="../assets/resume_Pic.jpg" alt="AWS" />
                </span>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;