import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../axiosConfig";

export default function PlayerDetails() {
  const { teamId, playerId } = useParams();
  const [player, setPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/teams/${teamId}`)
      .then((res) => {
        const found = res.data.players.find(p => p._id === playerId);
        setPlayer(found);
      })
      .catch((err) => console.error(err));
  }, [teamId, playerId]);

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this player?")) return;

    api.delete(`/teams/${teamId}/players/${playerId}`)
      .then(() => {
        alert("Player deleted");
        navigate(`/teams`);
      })
      .catch(err => console.error(err));
  };

  if (!player) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{player.name}</h2>

      <p><strong>Age:</strong> {player.age}</p>

      <p>
        <strong>Signature Agents:</strong>{" "}
        {player.signatureAgentsPlayed.join(", ")}
      </p>

      <div className="d-flex gap-2 mt-3">
        <Link 
          to={`/teams/${teamId}/players/${playerId}/edit`}
          className="btn btn-warning"
        >
          Edit Player
        </Link>

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete Player
        </button>
      </div>
    </div>
  );
}
