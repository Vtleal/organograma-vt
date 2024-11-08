import "./CampoTexto.css";

const CampoTexto = (props) => {
  // props é apenas uma variável "props" vem de propriedade podia ser qualquer outra palavra

  const placeholderModificada = `${props.placeholder}...`;
  // passando as propriedades do placeholder

  // let valor = 'Vitor Leal'

  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>

      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderModificada}
      />
    </div>
  );
};

export default CampoTexto;
