import { useState } from "react";
import "./App.css";
import Interrupteur from "./components/Interrupteur";
import Status from "./components/Status";

function App() {
  const mech = {};

  // Je crée un objet que je vais passer aux composants
  mech.int1 = useState(true); // [true, ƒ]
  mech.int2 = useState(true);
  mech.int3 = useState(true);

  const switcher = (i) => {
    let int = "int" + i; // Je crée le nom de la clé à switcher
    mech[int][0] ? mech[int][1](false) : mech[int][1](true);
  };

  mech.switcher = switcher;

  // À chaque composant j'enverrai l'objet et, s'il le faut, le numéro d'interrupteur à traiter
  // {int1: Array(2), int2: Array(2), int3: Array(2), switcher: ƒ}

  return (
    <>
      <header>DESSIN D'UNE FUSÉE - Ready to go</header>
      <main>
        <div className="interruteurs">
          <Interrupteur i="1" mech={mech} />
          <Interrupteur i="2" mech={mech} />
          <Interrupteur i="3" mech={mech} />
        </div>
        <Status mech={mech} />
      </main>
    </>
  );
}

export default App;
