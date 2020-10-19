import React from 'react'

function Header() {

    const headerStyle = {
        color: "black",
        fontWeight: "bold",
        backgroundColor: "coral",
        padding: "20px",
        fontFamily: "Arial",
        fontSize: "20px"
    };
    return (
        <div>
            <header style={headerStyle}><i className="fa fa-film"></i>  React Movie Cards</header>
        </div>
    )
}

export default Header;