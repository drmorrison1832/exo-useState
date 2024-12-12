const Interrupteur = (props) => {
  const { i, mech } = props;

  // Je crée le nom de la clé à traiter
  const int = "int" + i;

  // Je récupère la fonction
  const switcher = mech.switcher;

  // Je récupère la valeur de l'interrupteur
  const onOff = mech[int][0];

  return (
    <>
      <div
        className={`box ${onOff ? "is-on" : "is-off"}`}
        onClick={() => {
          !onOff && switcher(i);
        }}
      >
        On
      </div>
      <div>(debug: {onOff ? "On" : "Off"})</div>
      <div
        className={`box ${!onOff ? "is-on" : "is-off"}`}
        onClick={() => {
          onOff && switcher(i);
        }}
      >
        Off
      </div>
      <p>—</p>
    </>
  );
};

export default Interrupteur;
