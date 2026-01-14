const Header = () => {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "16px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#38bdf8",
            letterSpacing: "0.5px",
          }}
        >
          My Portfolio
        </div>

        {/* Navigation */}
        <ul
          style={{
            display: "flex",
            gap: "28px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                style={{
                  textDecoration: "none",
                  color: "#e5e7eb",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;