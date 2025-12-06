import heroImage from "../assets/valorantTeamsImg.webp";

export default function Content() {
  return (
    <div className="home_desc">
      <h1 className="landing-title">Welcome to VTeams</h1>
      <h2>Your Valorant eSports dashboard</h2>
      <p>You can check out here your favourite Valorant Teams! Add, modify and delete Teams or their players.</p>
      <img
        src={heroImage}
        alt="Valorant background"
        className="landing-image"
      />
      <p className="img-reference">
        Image source: <a href="https://steelseries.com/nl-be/blog/how-unlock-all-agents-valorant-230?srsltid=AfmBOoqg7DAtwa_tkaB_pE1xHjziuLuecyXroT4U_ImNNcRCmkrZ70S6" target="_blank"> website</a>
      </p>
    </div>
  );
}