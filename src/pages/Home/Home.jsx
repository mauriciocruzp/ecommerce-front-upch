import './Home.css'
import NavBar from '../../containers/NavBar/NavBar'
import CardsContainer from '../../containers/CardsContainer/CardsContainer';


function Home() {
  return (
    <>
      <NavBar />
      <div className='home'>
        <div className="cards">
          <CardsContainer />
        </div>
      </div>
    </>

  );
}

export default Home;