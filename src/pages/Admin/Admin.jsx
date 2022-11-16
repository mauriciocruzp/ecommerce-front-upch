import './Admin.css'
import { Link } from 'react-router-dom';
import NavBar from '../../containers/NavBar/NavBar';
function Admin() {

  return (
    <>
    <NavBar />
      <div className="admin">
        <div className="admin-buttons">
          <Link to="/new-product">
            <div className="admin-button">
              <div className='image-admin-button'><svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="white" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
              </svg></div>
              <h3 className="ab-text">Agregar producto</h3>
            </div>
          </Link>
          <div className="admin-button"></div>
          <div className="admin-button"></div>
          <div className="admin-button"></div>
          <div className="admin-button"></div>
          <div className="admin-button"></div>
        </div>
      </div>
    </>
  );
}

export default Admin;