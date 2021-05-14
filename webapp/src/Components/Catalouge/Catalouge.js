import React, { useState } from 'react'

function Catalouge(props) {
    return (
        <div className={`card1 ${props.viewCatalog ? "" : "catalogue-card"}`}>
            <div className="container">
                
                <h2 style={{ textAlign: "center" }}>See Catalouge here</h2>
                <h2 style={{ textAlign: "center" }}>See Catalouge here</h2>
                <h2 style={{ textAlign: "center" }}>See Catalouge here</h2>
                <h2 style={{ textAlign: "center" }}>See Catalouge here</h2>
                <h2 style={{ textAlign: "center" }}>See Catalouge here</h2>
            </div>
        </div>
    )
}

export default Catalouge
