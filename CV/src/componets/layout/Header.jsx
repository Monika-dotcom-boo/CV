import { Link } from 'react-router-dom';


function Header() {
    return (
      <header>
        <nav>
          <ul>
            <Link to="/Home">Home</Link>
            <Link to="/Bio">Bio</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Skille">Skille</Link>
            <Link to="/Contact">Contact</Link>
          </ul>
        </nav>
      </header>
    )
}

export default Header