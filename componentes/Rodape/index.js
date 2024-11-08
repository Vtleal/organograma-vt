import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img
                src="./imagens/imagens do rodape/fb.png"
                alt="logo facebook"
              />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img
                src="./imagens/imagens do rodape/tw.png"
                alt="logo twitter"
              />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img
                src="./imagens/imagens do rodape/ig.png"
                alt="logo do instagram"
              />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src="imagens/imagens do rodape/logo.png" alt="logo organo" />
      </section>
      <section>
        <p>Desenvolvido por Alura.</p>
      </section>
    </footer>
  );
};

export default Rodape;
