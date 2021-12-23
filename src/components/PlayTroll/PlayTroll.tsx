import react, { useState } from 'react'
import "./PlayTroll.scss"

const PlayTroll = () => {

    const [position, setPosition] = useState("inicial");
    const [isActive, setIsActive] = useState(false);

    const clickHere = () => {
        setIsActive(true);
    }

    const movePosition = () => {
        setIsActive(false);
        if(position == "inicial"){
            setPosition("one")
        }
        if(position == "one"){
            setPosition("two")
        }
        if(position == "two"){
            setPosition("three")
        }
        if(position == "three"){
            setPosition("four")
        }
        if(position == "four"){
            setPosition("five")
        }
        if(position == "five"){
            setPosition("six")
        }
        if(position == "six"){
            setPosition("seven")
        }
        if(position == "seven"){
            setPosition("eight")
        }
        if(position == "eight"){
            setPosition("inicial")
        }
    }


    return(
        <div className="wrapp">
            <div className="texto">
                Quieres dejar la Carrera?
            </div>
            <div onMouseOver={movePosition} className={`container ${position}`}>
                SI
            </div>
            <div onClick={clickHere} className="container no">
                NO
            </div>
           { isActive ?
            <div className="text-description">
                sabia que dirias que no, bien virtual
            </div>
            : null
            }
        </div>
    )
}

export default PlayTroll