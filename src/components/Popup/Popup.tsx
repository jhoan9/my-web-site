import React, { useState } from "react";
import "./Popup.scss";

const Popup: React.FC = () => {
    const [closePopup, setClosePopup] = useState(false);

    const handleClosePopup = () =>{
        alert("hello world")
    }
    return(
        <>
            <div className="wrapp-popup"></div>
            <div className="popup-container">
                <span className="close-popup"
                    onClick={()=>handleClosePopup()}
                >
                    X
                </span>
                <div className="wrapp-header">Welcome Popup</div>
                <div className="wrapp-body">
                    hello pepito perez
                </div>
                <div className="wrapp-btn">
                    <button
                        className="btn-continue"
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </>
    )
}

export default Popup