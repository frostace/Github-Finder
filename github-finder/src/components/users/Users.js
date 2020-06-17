import React, { useContext } from "react";
import UserItem from "./UserItem.js";
import Spinner from "../layout/Spinner.js";
import GithubContext from "../../context/github/githubContext";

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { users, loading } = githubContext;

    if (loading) {
        return <Spinner />;
    } else
        return (
            <div style={userStyle}>
                {users.map((user) => {
                    // console.log("passing: ", user);
                    return <UserItem key={user.id} user={user} />;
                })}
            </div>
        );
};

Users.propTypes = {};

const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
};
export default Users;
