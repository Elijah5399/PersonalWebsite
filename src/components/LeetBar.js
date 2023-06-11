import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LeetBar({ title, solved, total, variant, isScrolled }) {
  return (
    <div className="leetBarWrapper ">
      <h6>{title} </h6>
      <p>
        {solved} / {total}
      </p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        variant={variant}
        now={(solved / total) * 100}
      />
    </div>
  );
}
