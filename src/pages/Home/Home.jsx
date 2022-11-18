import HomeBanner from '../../components/Banner/HomeBanner.jsx';
import CardsContainer from '../../containers/CardsContainer/CardsContainer';
import NavBar from '../../containers/NavBar/NavBar';
import './Home.css';

function Home() {
  return (
    <>
      <NavBar />
      <div className='home'>
        <HomeBanner />
        <div className="cards">
          <CardsContainer />
        </div>
      </div>
    </>

  );
}

export default Home;