import React, { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import "./repositoriesList.css";
import logo from "../../assets/icons/logo.png"

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState("");
    const { searchRepositories } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.repositories
    );

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div className="repositories-container">
            <div className="repositories-title-container">
                <a href="https://vikram-singh-portfolio.netlify.app/" target="blank"><img src={logo} className="logo" alt="logo"/></a>
                <h1 className="repositories-title">Search For NPM Packages</h1>
            </div>
            <form className="repositories-form" onSubmit={onSubmit}>
                <input
                    className="repositories-input"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                    placeholder="Enter package name..."
                />
                <button className="repositories-button">Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading....</h3>}
            {!error && !loading && (
                <ul className="repositories-list">
                    {data.map((item: any, index: number) => (
                        <li key={index} className="repositories-item">
                            <a
                                href={item?.links?.npm}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="repositories-link"
                            >
                                {item?.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default RepositoriesList;
