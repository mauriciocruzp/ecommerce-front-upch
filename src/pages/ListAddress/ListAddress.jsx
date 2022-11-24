import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import City from "../../assets/svg/city_buildings.svg";
function ListAddress() {
  return (
    <>
      <div className="address-form w-full h-96 flex flex-col  justify-center items-center" >
        <h2>Selecciona una direccion</h2>
        <div className="w-1/2 h-1/2 flex flex-row justify-between items-center">
          {/*izquierda*/}
          <div className=" h-full flex flex-col justify-center w-50%">

            <Input type="text" text="Calle: " id="street"></Input>
            <Input type="number" text="Codigo postal:" id="zipcode"></Input>
            <Input type="text" text="Estado" id="state"></Input>
            <Input type="text" text="Pais:" id="country"></Input>
            <Button classNameButton="primary-button" text="Siguiente" type="submit" onclick="" widht="6000px" height="500px"></Button>
          </div>
          {/*derecha*/}
          <div className="image-background h-full flex flex-col justify-center items-center">
            <img src={City} width="50%" />
          </div>

        </div>

      </div>
    </>
  );
}

export default ListAddress;