import Image from "next/image";
import Button from "./Button";

const SplitImageLeft = () => {
  return (
    <div className="flex w-screen items-center justify-center bg-greenGrey">
      <div
        className="container grid min-h-[512px] grid-cols-1 items-center gap-24 py-24 md:grid-cols-2"
        id="social-media-text"
      >
        <Image
          src="/girl-influencer.svg"
          width={1054}
          height={672}
          alt="Redes sociales"
          className="h-auto w-full rounded-3xl"
        />
        <div className="flex flex-col items-start gap-4">
          <h3>Gestión de plataformas sociales</h3>
          <p>
            Captamos la esencia de tu marca y la transmitimos a través de
            contenido visual y escrito que resuena con tu audiencia, asegurando
            que tu mensaje no solo sea visto, sino también recordado.
          </p>
          <Button
            link="https://wa.me/+5350692027"
            label="Empieza a destacar en las redes.."
            white={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitImageLeft;
