import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import LeetBar from "./LeetBar";
import ProgressCircle from "./ProgressCircle";
import { useScrollPosition } from "../hooks/useScrollPosition";

export default function LeetCode() {
  const API = "https://leetcode-stats-api.herokuapp.com/ElijahChia";

  const [leetcodeProg, setleetcodeProg] = useState({});

  const leetCodeRef = React.useRef(null);

  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 800 < 0) setIsScrolled(true);
    },
    [],
    leetCodeRef
  );

  const fetchLeetCode = useCallback(async () => {
    try {
      const response = await axios.get(API);
      setleetcodeProg(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }, [API]);
  useEffect(() => {
    fetchLeetCode();
  }, [fetchLeetCode]);

  return (
    <div className="leetcodeContainer" ref={leetCodeRef}>
      <h5 className="rank">
        <b>
          Rank: {new Intl.NumberFormat("en-US").format(leetcodeProg.ranking)}{" "}
          worldwide
        </b>
      </h5>
      <h5 className="solved">Solved Problems</h5>
      <div className="circleAndBarWrapper">
        <ProgressCircle
          colorMain="hotpink"
          colorBg="pink"
          solved={leetcodeProg.totalSolved}
          total={leetcodeProg.totalQuestions}
          isScrolled={isScrolled}
        />
        <div className="leetBarsWrapper">
          <LeetBar
            title="Easy"
            solved={leetcodeProg.easySolved}
            total={leetcodeProg.totalEasy}
            variant="success"
            isScrolled={isScrolled}
          />
          <LeetBar
            title="Medium"
            solved={leetcodeProg.mediumSolved}
            total={leetcodeProg.totalMedium}
            variant="warning"
            isScrolled={isScrolled}
          />
          <LeetBar
            title="Hard"
            solved={leetcodeProg.hardSolved}
            total={leetcodeProg.totalHard}
            variant="danger"
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </div>
  );
}

/* 
Data format
{
    "status": "success",
    "message": "retrieved",
    "totalSolved": 122,
    "totalQuestions": 2732,
    "easySolved": 48,
    "totalEasy": 685,
    "mediumSolved": 68,
    "totalMedium": 1445,
    "hardSolved": 6,
    "totalHard": 602,
    "acceptanceRate": 53.25,
    "ranking": 537898,
    "contributionPoints": 1032,
    "reputation": 0,
    "submissionCalendar": {
        "1669680000": 2,
        "1678320000": 27,
        "1678406400": 10,
        "1678492800": 1,
        "1678579200": 1,
        "1678665600": 5,
        "1678752000": 5,
        "1678838400": 7,
        "1678924800": 1,
        "1679011200": 1,
        "1679097600": 1,
        "1679184000": 4,
        "1679270400": 3,
        "1679356800": 5,
        "1679875200": 1,
        "1682899200": 14,
        "1682985600": 4,
        "1683072000": 14,
        "1683158400": 5,
        "1683244800": 8,
        "1683331200": 3,
        "1683417600": 3,
        "1683504000": 2,
        "1683590400": 2,
        "1683676800": 2,
        "1683763200": 2,
        "1683849600": 3,
        "1683936000": 5,
        "1684022400": 7,
        "1684108800": 1,
        "1684195200": 2,
        "1684281600": 1,
        "1684368000": 4,
        "1684454400": 2,
        "1684540800": 1,
        "1684627200": 7,
        "1684713600": 3,
        "1684800000": 3,
        "1684886400": 6,
        "1684972800": 8,
        "1685059200": 4,
        "1685145600": 2,
        "1685232000": 4,
        "1685318400": 2,
        "1685404800": 11,
        "1685491200": 2,
        "1685577600": 3,
        "1685664000": 3,
        "1685750400": 2,
        "1685836800": 2,
        "1685923200": 2,
        "1686009600": 9,
        "1686096000": 1,
        "1686182400": 3,
        "1686268800": 1,
        "1686355200": 9
    }
}
*/
