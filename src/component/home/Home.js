import React, { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import InsertWord from '../insertWord/InsertWord';
import Tip from '../tip/Tip';
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";

const Home = () => {

    const { match, messages, everyoneIsReady } = useContext(GameContext)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)

    console.log("Componente pai sendo chamado")

    let playerAux = JSON.parse(localStorage.getItem("user"))
    const [isOpenModal, setIsOpenModal] = useState(playerAux.color === "")

    const loader = document.querySelector(".loader")
    const scanning = document.querySelector(".scanning")

    useEffect(() => {
        const gameTimer = setInterval(() => {

            let minutes = Math.floor(match.time / 60)
            let seconds = match.time % 60

            match.time--;

            console.log(minutes + ":" + (seconds < 10 ? "0" : "") + seconds)

            return () => clearInterval(gameTimer)
        }, 1000)
    }, [])


    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenScanner = () => {
        setInsertWord(false)
        setTip(false)
        scannerPage(true)
    }

    const handleOpenTip = () => {
        setTip(true)
        setInsertWord(false)
        scannerPage(false)
    }

    const handleOpenInsertWord = () => {
        setTip(false)
        setInsertWord(true)
        scannerPage(false)
    }

    const scannerPage = (bool) => {
        if (bool) {
            loader.style.display = "block"
            scanning.style.display = "block"
        } else {
            loader.style.display = "none"
            scanning.style.display = "none"
        }
    };

    return (
        <div>

            {!isOpenModal &&
                <>
                    {insertWord &&
                        <InsertWord player={playerAux} />
                    }
                    {tip &&
                        <Tip player={playerAux} />
                    }
                    <Scanner player={playerAux} />
                    {/* {
                        <Chat />
                    } */}
                    {!everyoneIsReady &&
                        <>
                            <Menu
                                onScannerClick={() => handleOpenScanner()}
                                onTipClick={() => handleOpenTip()}
                                onInsertWordClick={() => handleOpenInsertWord()}
                            />
                        </>
                    }
                </>
            }

            {isOpenModal &&
                <ChooseTeam player={playerAux} handleCloseModal={handleCloseModal} />
            }
        </div>
    )
}

export default Home;
