import React from 'react'

function AddItems(props) {
    return (
        <div className= {`card1 ${props.viewCatalog?"add-item-card":""}`} >
           <h2 style={{textAlign:"center"}}>Add item Here</h2>
        </div>
    )
}

export default AddItems
