import React, { useState } from "react";
import moment from "moment";
import { CommitChart } from "../chart/CommitChart";
import Commit from "../Commit";
import Additions from "../Additions";
import Deletions from "../Deletions";

const RepoCard = ({ repo }) => {
  const [flag, setFlag] = useState(false);
  const [selectChangesRepo, setSelectChangesRepo] = useState({
    options: "commiting",
  });

  console.log("selectChangesRepo", selectChangesRepo);
  //   const changehandler = (event) => {
  //     let val = event.target.value;
  //     setType(val);
  //     event.preventDefault();
  //     let arr = data.filter((el) => {
  //       if (el.catogery === val) {
  //         return true;
  //       }
  //       return false;
  //     });
  //     setDis(arr);
  //     setFlag(true);
  //     console.log(type);
  //   };

  return (
    <>
      <div className="row shadow-sm mt-5 mb-5">
        <div className="col-sm-3 mb-5">
          <img
            src={repo.owner.avatar_url}
            className="rounded mx-auto d-block"
            alt="avatar_url"
            style={{
              padding: "2px",
              maxHeight: "150px",
              maxWidth: "150px",
            }}
          />
        </div>
        <div className="col-sm-4">
          <div>
            <h4 className="text-dark">{repo.name}</h4>
            <p className="text-muted">{repo.description}</p>
            <div className="d-flex">
              <span className="border p-3" style={{ marginLeft: "10px" }}>
                {" "}
                {repo.stargazers_count}
              </span>
              <span className="border p-3" style={{ marginLeft: "10px" }}>
                {repo.open_issues}
              </span>
              <span className="border p-3" style={{ marginLeft: "50px" }}>
                &nbsp;&nbsp;{moment(repo.created_at).fromNow()} By{" "}
                {repo.owner.login}
              </span>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="d-flex justify-content-end">
            <div className="row">
              <div className="col-sm-2"></div>
              <div className="col-sm-10">
                {flag === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                    onClick={() => setFlag(!flag)}
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                ) : (
                  <div className="d-flex">
                    <select
                      className="form-select"
                      onChange={(e) =>
                        setSelectChangesRepo({
                          options: e.target.value,
                        })
                      }
                    >
                      <option defaultValue value="commiting">
                        commiting
                      </option>
                      <option value="additing">additing</option>
                      <option value="deleting">deleting</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      onClick={() => setFlag(!flag)}
                      className="bi bi-caret-left-fill mt-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {flag && selectChangesRepo.options === "commiting" && (
        <Commit
          owner={repo.owner.login}
          repo={repo.name}
          selectedOption={selectChangesRepo.options}
        />
      )}
      {flag && selectChangesRepo.options === "additing" && (
        <Commit
          owner={repo.owner.login}
          repo={repo.name}
          selectedOption={selectChangesRepo.options}
        />
      )}
      {flag && selectChangesRepo.options === "deleting" && (
        <Commit
          owner={repo.owner.login}
          repo={repo.name}
          selectedOption={selectChangesRepo.options}
        />
      )}
    </>
  );
};

export default RepoCard;
