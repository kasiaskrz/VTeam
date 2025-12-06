import './App.css'
import Content from './components/Content'
import Footer from './components/Footer'
import TeamList from './components/TeamList'
import AddTeam from './components/AddTeam'
import EditTeam from './components/EditTeam'
import PlayerDetails from './components/PlayerDetails'
import AddPlayer from "./components/AddPlayer"
import EditPlayer from "./components/EditPlayer"
import { Routes, Route, Link } from 'react-router-dom'
import NavigationBar from "./components/NavigationBar"


function App() {
  return (
    <div className="app-wrapper">
      <NavigationBar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/teams" element={<TeamList />} />
          <Route path="/add" element={<AddTeam />} />
          <Route path="/edit/:id" element={<EditTeam />} />
          <Route path="/teams/:teamId/players/:playerId" element={<PlayerDetails />} />
          <Route path="/teams/:teamId/players/add" element={<AddPlayer />} />
          <Route path="/teams/:teamId/players/:playerId/edit" element={<EditPlayer />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}


export default App
