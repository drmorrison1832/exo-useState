import { useState } from "react";
import "./App.css";
import Interrupteur from "./components/Interrupteur";
import Status from "./components/Status";

function App() {
  const [{ a, b }, { c, d }, { e, f }] = [
    useState(1),
    useState(1),
    useState(1),
  ];

  const [interrupteur0, setInterrupteur0] = useState(true);
  const [interrupteur1, setInterrupteur1] = useState(false);
  const [interrupteur2, setInterrupteur2] = useState(true);

  const turnOnInterrupteur0 = () => setInterrupteur0(true);
  const turnOffInterrupteur0 = () => setInterrupteur0(false);

  const turnOnInterrupteur1 = () => setInterrupteur1(true);
  const turnOffInterrupteur1 = () => setInterrupteur1(false);

  const turnOnInterrupteur2 = () => setInterrupteur2(true);
  const turnOffInterrupteur2 = () => setInterrupteur2(false);

  const interrupteurs = [interrupteur0, interrupteur1, interrupteur2];

  const turnOnInterrupteurs = [
    turnOnInterrupteur0,
    turnOnInterrupteur1,
    turnOnInterrupteur2,
  ];
  const turnOffInterrupteurs = [
    turnOffInterrupteur0,
    turnOffInterrupteur1,
    turnOffInterrupteur2,
  ];

  return (
    <>
      <header>FUSÉE - Ready to go</header>
      <main>
        <div className="interruteurs">
          {interrupteurs.map((int, index) => {
            return (
              <div key={`interrupteur${index}`} className="interrupteur">
                <Interrupteur
                  interrupteur={interrupteurs[index]}
                  turnOnInterrupteur={turnOnInterrupteurs[index]}
                  turnOffInterrupteur={turnOffInterrupteurs[index]}
                />
              </div>
            );
          })}
        </div>
        <Status status={interrupteurs} />
      </main>
    </>
  );
}

export default App;
