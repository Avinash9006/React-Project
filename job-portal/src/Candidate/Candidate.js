import React, { useEffect, useState } from "react";
import "./Candidate.css";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Candidate({ getItem, updateState, src, title,match,mode }) {
  const [iteme,setitem] = useState('')
  useEffect(() =>{
  console.log(match)
  if (match && match.params.id && getItem)
  setitem(getItem(match.params.id))
  },[match])
  
  // if (match && match.params.id) {
    if(mode){
      // setitem(getItem('1002'))
      console.log(iteme)
    return (
      <div className="card" style={{ width: "20vw", margin: "10px" }}>
        <img src={iteme.Image} className="card-img-top" alt="..." height="200" />
        <div className="card-body">
          <h5 className="card-title">{iteme.name}</h5>
        </div>
        <Link to={'/'}>
        <Button
          style={{ margin: "5px 0" }}
          variant="outline-dark"
          onClick={(e) => updateState(iteme.id,"shortlisted")}
        >
          Shortlist
        </Button>
        </Link>
        <Link to={'/'}><Button variant="outline-dark" onClick={(e) => updateState(iteme.id,"rejected")}>
          Reject
        </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="card" style={{ width: "20vw", margin: "10px" }}>
        <img src={src} className="card-img-top" alt="..." height="200" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    );
  }
}

export default Candidate;
