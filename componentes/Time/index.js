import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  //componente time é onde vao aparecer os bloquinhos das pessoas cadastradas

  const css = { backgroundColor: props.corSecundaria };
  const css2 = { borderColor: props.corPrimaria };

  // Se ? a condição > 00 for verdadeira, devolva a <section>, se não for verdade, devolva a string vazia ''.
  return props.colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={css2}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
