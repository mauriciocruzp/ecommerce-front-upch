import './Home.css'
import NavBar from '../../containers/NavBar/NavBar'
import Card from '../../containers/Card/Card'

function Home() {
  return (
    <>
      <NavBar />
      <div className='home'>
        <div className="cards">
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
          <Card price="43333" text="Pasta termica" />
        </div>
      </div>
    </>

  );
}

export default Home;