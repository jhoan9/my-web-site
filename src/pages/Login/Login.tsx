import React from "react"
import PlayTroll from "../../components/PlayTroll/PlayTroll"
import Popup from "../../components/Popup/Popup"
import "./Login.scss"

const Login: React.FC = () => {
    return(
        <div className="wrapp-login">
            <div className="wrapp-header">
                <div className="container left">
                    aqui debe ir un icono que me represente
                </div>
                <div className="container right">
                    aqui debe ir otra cosa, pero no se que
                </div>
            </div>
            <div className="section-wrapp">
                <nav className="nav-options">
                    this is a nav
                </nav>
                <section className="info-container">
                    <PlayTroll/>
                </section>
            </div>
            <div className="wrapp-footer">
                © All rights reserved
            </div>
            {/*<Popup/>*/}
        </div>
    )
}



export default Login