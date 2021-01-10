import "./App.css";
import CandidateList from "./CandidateList/CandidateList.js";
import Candidate from "./Candidate/Candidate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./SideBar/Sidebar";
import React, { useEffect, useState } from "react";


function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [shortlisted, setshortlisted] = useState(false);
  const [rejected, setrejected] = useState(false);
  const [candidate, setCandidate] = useState([]);
  const [stored, setStored] = useState([]);
  useEffect(() => {
    function fetchData() {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json")
        .then((res) => res.json())
        .then((data) => {
          let finalData = data.map((item) => {
            item["shortlisted"] = false;
            item["rejected"] = false;
            return item;
          });
          setCandidate(finalData);
          setStored(finalData);
        });
    }
    fetchData();
  }, []);
  function getItem(id){
    return stored.find((item)=>{return id===item.id})
  }
  function updateState(id,key){
    let finalData = stored.map((item)=>{
      if(item.id===id) {item[key]=true;
      if(key==='rejected') item['shortlisted']=false; else  item['rejected']=false;} return item})
    setCandidate(finalData);
    setStored(finalData);
  }
  return (
    <div className="container">
      <Router>
      <Switch>
        <Route exact path="/candidate" render={()=>
        <div>
           <Sidebar
           setsearchTerm={setsearchTerm}
           setshortlisted={setshortlisted}
           setrejected={setrejected}
         />
         <CandidateList
           candidate={candidate}
           stored={stored}
           setCandidate={setCandidate}
           searchTerm={searchTerm}
           shortlisted={shortlisted}
           rejected={rejected}
         />
         </div>
        } />
        <Route exact path="/" render={()=>
        <div>
           <Sidebar
           setsearchTerm={setsearchTerm}
           setshortlisted={setshortlisted}
           setrejected={setrejected}
         />
         <CandidateList
           candidate={candidate}
           stored={stored}
           setCandidate={setCandidate}
           searchTerm={searchTerm}
           shortlisted={shortlisted}
           rejected={rejected}
         />
         </div>
        }  />
        <Route path="/candidate/:id" render={(props)=><Candidate {...props} getItem={getItem} mode={'single'} updateState={updateState}/>} />
        <Route path="/shorlisted"  exact render={()=>
        <div>
          <Sidebar
           hide = "true"
           setsearchTerm={setsearchTerm}
           setshortlisted={setshortlisted}
           setrejected={setrejected}
         />
         <CandidateList
           candidate={candidate}
           stored={stored}
           setCandidate={setCandidate}
           searchTerm={searchTerm}
           shortlisted={true}
           rejected={false}
         />
         </div>
        } />
        <Route path="/rejected"  render={()=>
        <div>
          <Sidebar
          hide="true"
           setsearchTerm={setsearchTerm}
           setshortlisted={setshortlisted}
           setrejected={setrejected}
         />
         <CandidateList
           candidate={candidate}
           stored={stored}
           setCandidate={setCandidate}
           searchTerm={searchTerm}
           shortlisted={false}
           rejected={true}
         />
         </div>
        } />
      </Switch>
    </Router>
     
    </div>
  );
}

export default App;
