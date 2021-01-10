import React, { useEffect } from "react";
import Candidate from "../Candidate/Candidate.js";
import "./CandidateList.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function CandidateList({
  searchTerm,
  shortlisted,
  rejected,
  candidate,
  stored,
  setCandidate,
}) {
  useEffect(() => {
    function filterarray(text, array) {
      if (shortlisted) array = array.filter((item) => item.shortlisted);
      else if (rejected) array = array.filter((item) => item.rejected);
      if (text && text !== "") {
        return array.filter((data) =>
          data["name"].toLowerCase().includes(text.toLowerCase())
        );
      } else return array;
    }
    setCandidate(filterarray(searchTerm, stored));
  }, [searchTerm, shortlisted, rejected]);

  return (
    <React.Fragment>
      <h3>Candidates Profile</h3>
      <div className="CandidateList">
        {candidate.map((can) => {
          return (
            <div>
              <Link to={`/candidate/${can.id}`}><Candidate key={can.id} src={can.Image} title={can.name} /></Link>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default CandidateList;
