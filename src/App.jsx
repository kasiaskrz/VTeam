import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">VTeams</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Header />} />
        <Route path="/create" element={<Content />} />
      </Routes>
      
      <Footer />

    </>
  )
}

export default App
