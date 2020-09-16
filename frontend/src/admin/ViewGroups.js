import React from "react";
import "../App.css";
// import { Link } from "react-router-dom";
import DeleteGroup from "./DeleteGroup";

const ViewGroups = ({ id, groups, setGroups }) => {


  return (
    <div>
      <div className=""></div>
      <div className="table">
        <table className="table">
          {/* <thead>
            <tr>
              <th scope="col">#</th>
                          <th scope="col">Group Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead> */}

          {groups && groups.length > 0 ? (
            <tbody>
              {groups.map((data, i) => {
                return (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{data.name}</td>
                    <td>
                      <DeleteGroup
                        props={{
                          locationId: id,
                          groupId: data._id,
                          onDeleteGroup: () =>
                            setGroups(
                              groups.filter((oldGroup) => oldGroup !== data)
                            ),
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <th>No groups added yet</th>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ViewGroups;
