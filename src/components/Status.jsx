const Status = (props) => {
  const interrupteurs = props.status;

  return (
    <>
      {" "}
      <div
        className={`box ${
          interrupteurs.findIndex((interrupteur) => interrupteur === false) !==
          -1
            ? "no-way"
            : "lets-go"
        }`}
      >
        {interrupteurs.findIndex((interrupteur) => interrupteur === false) !==
        -1
          ? "No way"
          : "Let's go"}
      </div>
    </>
  );
};

export default Status;
