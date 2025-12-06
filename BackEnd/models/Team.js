import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  signatureAgentsPlayed: [String]
});

const teamSchema = new mongoose.Schema({
  teamName: String,
  region: String,
  logoUrl: {
    type: String,
    default: ""
  },
  
  players: [playerSchema],
  championships: {
    type: [String],
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Team", teamSchema);
