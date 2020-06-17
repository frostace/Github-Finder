import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    // create a local state and method to mutate state
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        if (text === "") {
            alertContext.setAlert("Please enter somthing", "light");
            return;
        }
        githubContext.searchUsers(text);
    };

    const onChange = (event) => setText(event.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} action="" className="form">
                <input
                    type="text"
                    name="text"
                    placeholder="Search Users..."
                    value={text}
                    onChange={onChange}
                />
                <input
                    type="submit"
                    value="Search"
                    className="btn btn-dark btn-block"
                />
            </form>
            {githubContext.users.length > 0 && (
                <button
                    className="btn btn-light btn-block"
                    onClick={githubContext.clearUsers}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

Search.propTypes = {};

export default Search;
