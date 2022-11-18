import homeimg from "../../assets/img/homebannerimg.svg";
import "./HomeBanner.css";

export default function HomeBanner() {

  const isAuthenticated = false;

  // const username = user.first_name;
  const username = "hola";


  return (
    <>
      <div className="banner-background w-full h-96 flex flex-col justify-center items-center">
        {/* make a div with 2 columns */}
        <div className="w-2/3 h-2/3 flex flex-row justify-between items-center">
            {/* left column */}
            <div className="h-full flex flex-col justify-center">
                <p className="pb-2 text-4xl text-white">¡Bienvenido<span className="text-white font-bold">{isAuthenticated ? " " + username : ""}</span>!</p>
                <p className="pt-2 text-3xl text-white">Aprovecha hoy! Encuentra tus productos favoritos a un precio espectacular</p>
            </div>
            {/* right column */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                {/* dessapear image on mobile */}
                <img className="hidden md:block" src={homeimg} alt="homeimg" />
            </div>
        </div>
      </div>
    </>
  );
}