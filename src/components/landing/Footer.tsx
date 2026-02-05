const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <span className="text-2xl font-serif font-semibold">Fourmidable</span>
          <p className="text-primary-foreground/70 text-sm mt-2">Organic Skin Care</p>
        </div>
        <div className="text-sm text-primary-foreground/60">
          <p>Registro cosmético INVIMA</p>
          <p className="mt-2">© {new Date().getFullYear()} Fourmidable. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
