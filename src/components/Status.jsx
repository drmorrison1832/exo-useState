const Status = (props) => {
  const mech = props.mech;

  const interrupteurs = [mech.int1[0], mech.int2[0], mech.int3[0]];

  return interrupteurs.includes(false) ? (
    <div className="box no-way">no-way</div>
  ) : (
    <div className="box lets-go">lets-go</div>
  );
};

export default Status;

{
  // AUTRE OPTION
  /* return(
      <div
        className={`box ${
          interrupteurs.includes(false) ? "no-way" : "lets-go"
        }`}
      >
        {interrupteurs.includes(false) ? "No way" : "Let's go"}
      </div>
);
 */
}
