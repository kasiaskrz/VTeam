export default function Footer() {
  return (
    <footer className="text-center py-3 mt-5" style={{ opacity: 0.8 }}>
      <p className="mb-1">© {new Date().getFullYear()} Katarzyna - VTeams Project</p>
      <p className="footer_desc">
        This is a student project created for educational purposes.
        All Valorant trademarks, teams, and game content belong to{" "}
        <a
          href="https://www.riotgames.com"
          target="_blank"
          rel="noopener noreferrer"
          className="riot-link"
        >
          Riot Games
        </a>.
      </p>
    </footer>
  );
}
