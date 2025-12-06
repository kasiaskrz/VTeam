import { useEffect, useState } from "react";
import api from "../axiosConfig";
import { Link } from "react-router-dom";

export default function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    api.get("/teams")
      .then(res => setTeams(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this team?")) return;

    api.delete(`/teams/${id}`)
      .then(() => {
        setTeams(teams.filter(t => t._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4">Teams</h2>

      {/* WRAPPER FOR CENTERING CARDS */}
      <div className="team-cards">
        {teams.map(team => (
          <div
            key={team._id}
            className="team-card border rounded p-3 shadow-sm"
          >

            {/* TEAM LOGO */}
            {team.logoUrl ? (
              <img
                src={team.logoUrl}
                alt={`${team.teamName} logo`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "10px"
                }}
              />
            ) : (
              <img
                src=""
                alt="No logo"
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "contain",
                  marginBottom: "10px"
                }}
              />
            )}

            <h4>{team.teamName}</h4>

            <p><strong>Region:</strong> {team.region}</p>

            <p>
              <strong>Championships:</strong>{" "}
              {team.championships.filter(c => c.trim() !== "").length > 0
                ? team.championships.filter(c => c.trim() !== "").join(", ")
                : "No championships yet."}
            </p>

            <div>
              <strong>Players:</strong>

              {team.players.length === 0 ? (
                <p className="text-muted mb-1">No players yet.</p>
              ) : (
                <ul>
                  {team.players.map(player => (
                    <li key={player._id}>
                      <Link
                        to={`/teams/${team._id}/players/${player._id}`}
                        className="text-decoration-none"
                      >
                        {player.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="d-flex gap-2 mt-3 justify-content-center">

              {team.players.length < 5 ? (
                <Link
                  className="btn btn-success btn-sm"
                  to={`/teams/${team._id}/players/add`}
                >
                  Add Player
                </Link>
              ) : (
                <button className="btn btn-secondary btn-sm" disabled>
                  Team Full (5/5)
                </button>
              )}

              <Link
                className="btn btn-warning btn-sm"
                to={`/edit/${team._id}`}
              >
                Edit Team
              </Link>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(team._id)}
              >
                Delete Team
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
