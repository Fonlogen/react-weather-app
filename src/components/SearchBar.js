import React from "react";

function SearchBar(props) {
    let CityName = null;
    return (
        <div className="SearchBar">
            <h2>Cerca una città</h2>
            <input type="text" placeholder="New York" onChange={(e) => {CityName = e.target.value}}/>
            <button onClick={(e) => {props.setCity(CityName)}}>Cerca</button>
        </div>
    );
}

export default SearchBar;