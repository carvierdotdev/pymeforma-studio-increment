import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex w-screen flex-col items-center bg-greenGrey pb-24 pt-12">
      <div className="container grid min-h-[512px] grid-cols-1 items-center gap-24 pt-4 text-left md:grid-cols-2">
        <div className="grid items-start gap-12" id="hero-text">
          <h1>Ideas que Vuelan, Negocios que Crecen</h1>
          <p>
            Impulsamos tu visión y construimos tu éxito. Creemos en el poder de
            las ideas y en la pasión de los emprendedores. Nuestro enfoque está
            en ayudar a alcanzar las metas con estrategias de marketing digital
            innovadoras y personalizadas.
          </p>
          <div className="items-start font-semibold">
            <Button
              link="https://wa.me/+5350692027"
              label="Habla con nosotros"
            />
          </div>
        </div>
        <Image
          src="/product-launch.svg"
          width={1052}
          height={727}
          alt="Icono del lanzamiento de un producto"
          className="h-auto w-full overflow-hidden rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
