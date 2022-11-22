import homeimg from "../../assets/img/homebannerimg.svg";
import "./HomeBanner.css";

export default function HomeBanner() {

  const isAuthenticated = false;

  // const username = user.first_name;
  const username = "hola";


  return (
    <>
      <div className="banner-background w-full flex flex-col justify-center items-center">
        <div className="w-3/4 h-2/3 flex flex-row justify-between items-center">
            <div className="w-2/3 h-full flex flex-col justify-center">
                <p className="pb-2 text-4xl text-white">¡Bienvenido<span className="text-white font-bold">{isAuthenticated ? " " + username : ""}</span>!</p>
                <p className="pt-2 text-3xl text-white">Aprovecha hoy! Encuentra tus productos favoritos a un precio espectacular</p>
            </div>
            <div className="w-2/5 flex flex-col justify-center items-center">
                <img className="hidden md:block banner-image" src={homeimg} alt="homeimg" />
            </div>
        </div>
      </div>
    </>
  );
}