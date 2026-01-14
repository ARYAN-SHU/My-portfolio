const OrganizationProjects = () => {
  return (
    <section
      style={{
        padding: "80px 20px",
        backgroundColor: "#f1f5f9",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "50px",
            color: "#0f172a",
          }}
        >
          Professional Experience
        </h2>

        <div
          style={{
            background: "#ffffff",
            padding: "30px",
            borderRadius: "14px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <h3 style={{ color: "#0f172a", marginBottom: "8px" }}>
            Software Developer Intern
          </h3>
          <p
            style={{
              color: "#38bdf8",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            XYZ Tech Solutions
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              color: "#475569",
              lineHeight: "1.7",
              fontSize: "0.95rem",
            }}
          >
            <li>Built scalable REST APIs using Node.js & Express</li>
            <li>Developed internal dashboards using React</li>
            <li>Worked with PostgreSQL & Sequelize ORM</li>
            <li>Collaborated with cross-functional teams</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizationProjects;