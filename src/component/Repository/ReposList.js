import React from "react";
import RepoCard from "./RepoCard";

const ReposList = ({ list }) => (
  <div className="row">
    {list.map((item, index) => {
      return <RepoCard key={index} repo={item} />;
    })}
  </div>
);

export default ReposList;
