import Button from "./Button";

const CallToActionButton = () => {
  return (
    <div
      className="inline-flex w-screen flex-col items-center gap-16 bg-grey py-24 text-center"
      id="cta-text"
    >
      <div className="container flex flex-col items-center gap-6">
        <h2>
          Con nosotros, tu visión emprendedora se convierte en éxito tangible.
          Tu éxito es, y siempre será, nuestro compromiso.
        </h2>
        <p>
          Somos un equipo de expertos en marketing digital con una misión:
          transformar marcas y escalar negocios. Nos especializamos en impulsar
          a pequeños emprendedores, ofreciendo soluciones creativas y una
          perspectiva global que generan resultados reales.
        </p>
        <Button
          link="https://wa.me/+5350692027"
          label="Conoce al Equipo Creativo"
          white={false}
        />
      </div>
    </div>
  );
};

export default CallToActionButton;
