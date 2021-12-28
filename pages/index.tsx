import { useState } from "react";
import Porta from "../components/Porta";
import { atualizarPortas, criarPortas } from "../functions/portas";
import PortaModel from "../model/porta";

export default function Home() {
  /*const [p1, setP1] = useState(new PortaModel(1))
  const [p2, setP2] = useState(new PortaModel(2))
  const [p3, setP3] = useState(new PortaModel(3))*/

  const [portas, setPortas] = useState(criarPortas(3,2));
 

  function renderizarPortas(){
    return portas.map((porta) => {
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta)) } />
    })
  }


  return (
    <div style={{ display: "flex" }}>
      {renderizarPortas()}
    </div>
  );
}
