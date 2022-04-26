import React from "react";

function Background(props) {
    return (
        <div className="weather">
            <img src={require("../images/" + props.bg + ".jpg")} width="100%" height="100%" alt="weather" />
        </div>
    )
}

export default Background;