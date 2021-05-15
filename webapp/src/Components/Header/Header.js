import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import AddItems from '../AddItems/AddItems';
import Catalouge from '../Catalouge/Catalouge';

import './Header.styles.css'

const Header = () => {
    const [viewCatalog, setviewCatalog] = useState(true)

    // const history=useHistory()
    return (
        <div>
            <div class=" header">
                Inventory Management
            </div>
            <nav style={{ width: "100%", height: '100%' }}>
                <div className="fluid-container" style={{ textAlign: "center" }}>
                    <div style={{ display: "flex" }}>
                        <div className="col button-wrapper">
                            <button type="button" className="header-button" onClick={()=>{setviewCatalog(true)}}>Catalouge</button>
                        </div>
                        <div className="col button-wrapper">
                            <button type="button" className="header-button" onClick={()=>{setviewCatalog(false)}}>Add Items</button>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{position:"fixed"}}>
                
            <Catalouge viewCatalog={viewCatalog}></Catalouge>
            <AddItems viewCatalog={viewCatalog}></AddItems>
            </div>
        </div>
    );
}

export default Header;