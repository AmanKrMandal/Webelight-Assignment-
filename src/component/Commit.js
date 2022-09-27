import React from "react";
import { CommitChart } from "./chart/CommitChart";

const Commit = ({owner, repo, selectedOption}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <CommitChart owner={owner} repo={repo} selectedOption={selectedOption}/>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Commit;
