import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reposData } from "../Redux/Action";
import ReposList from "./ReposList";


const Repository = () => {
  const dispatch = useDispatch();

  let data = useSelector((state) => state.reposData.items);
  // console.log(data);

  useEffect(() => {
    dispatch(reposData());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      {data === undefined ? <h1>Loading...</h1> : <ReposList list={data} />}
    </div>
  );
};

export default Repository;
