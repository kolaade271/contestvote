import ppp from "../img/ppp.png";

function Nav() {
  return ( 
    <div className="Nav">
 <nav className="navbar navbar-expand-lg navbar-light" id="navb">
  <div className="container-fluid">
    <div className="navbar-brand" ><a href="https://paysnug.com"><img src={ppp} alt="beezride" className="src" /></a></div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse collapsenav navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/aboutus">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Products</a>
          <ul className="dropdown-menu productdrop">
            <li><a href="/drive">Drive for us</a></li>
            <li><a href="/ride">Ride with us</a></li>
            </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/faq">FAQ</a>
        </li>
     
      </ul>
    </div> */}
  </div>
</nav>
    
    </div>
  );
}

export default Nav;
