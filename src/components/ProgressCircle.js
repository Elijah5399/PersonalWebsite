/**
 * @param colorMain the filled color of the  circle
 * @param colorBg the unfilled color of the  circle
 * @param solved Number of problems solved
 * @param total Total number of problems
 */

export default function ProgressCircle({ colorMain, colorBg, solved, total }) {
  const solvedPercentage = (solved / total) * 100;

  return (
    <div
      className="circleWrapper"
      style={{
        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%), conic-gradient(${colorMain} ${solvedPercentage}%, ${colorBg} 0)`,
      }}
      content="75%"
    >
      <progress
        className="progressCirc"
        value="75"
        min="0"
        max="100"
        style={{
          visibility: "hidden",
          height: 0,
          width: 0,
        }}
      ></progress>
      <p className="progressCircText">{`${solved} / ${total} solved`}</p>
    </div>
  );
}

/*
backgroundColor: "transparent",
          background:
            "radialGradient(closest-side, white 79%, transparent 80% 100%), conicGradient(hotpink 75%, pink 0)",
          color: "transparent",
          borderRadius: "50%",
          width: "100px",
          height: "100px",
          */
