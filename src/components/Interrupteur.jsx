const Interrupteur = (props) => {
  const { interrupteur, turnOnInterrupteur, turnOffInterrupteur } = props;
  return (
    <>
      <div
        className={`box ${interrupteur === true ? "is-on" : "is-off"}`}
        onClick={turnOnInterrupteur}
      >
        On
      </div>
      <div
        className={`box ${interrupteur === false ? "is-on" : "is-off"}`}
        onClick={turnOffInterrupteur}
      >
        Off
      </div>
      <div>(debug: {interrupteur ? "On" : "Off"})</div>
    </>
  );
};

export default Interrupteur;
