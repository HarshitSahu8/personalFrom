import { useQuery } from "@tanstack/react-query";
import React from "react";
import DataTable from "../components/DataTable";
import { getAllUsers } from "../provider/userApi";

const Users = () => {
  const { isSuccess, isLoading, data } = useQuery(["user"], () =>
    getAllUsers()
  );

  const getFormattedData = (data) => {
    let response = data.map((user) => {
      return {
        name: user.name,
        "Age/Sex": `${user.age}${
          user.sex && user.sex === "male" ? " / M" : " / F"
        }`,
        Mobile: user.MobileNo ?? "-",
        "Govt ID": user.IdNo ?? "-",
        "Guardian Details": `${user.guardianType}. ${user.guardianName}` ?? "-",
        Nationality: user.nationality ?? "",
      };
    });
    return response;
  };

  return (
    <div>
      {isLoading && !isSuccess ? (
        <p>Loading...</p>
      ) : (
        <DataTable tableData={getFormattedData(data.users)} />
      )}
    </div>
  );
};

export default Users;
