import 'bootstrap/dist/css/bootstrap.css';

const Nav = () => {
  return (
    <div className="w-full round">
      <nav className="navbar sticky-top navbar-light bg-dark">
        <div className="d-flex justify-content-center w-100">
          <h1 className='navbar-brand text-light'>IMDB Movies</h1>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
