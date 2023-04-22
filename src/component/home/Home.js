import React, { useContext, useEffect, useState } from "react";
import { GameContext, getUser, sendMessage, setUser, timerGame } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import InsertWord from '../insertWord/InsertWord';
import Tip from '../tip/Tip';
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar"
import Ranking from "../ranking/Ranking";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { match, messages, everyoneIsReady, timer, punctuation, hit } = useContext(GameContext)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)
    const nav = useNavigate()

    let playerAux = getUser()
    const [isOpenModal, setIsOpenModal] = useState(playerAux.color === "")

    const loader = document.querySelector(".loader")
    const scanning = document.querySelector(".scanning")

    useEffect(() => {
        if (!isOpenModal) timerGame(match)
    }, [timerGame, isOpenModal])

    useEffect(() => {
        if (hit.bool && hit.color === playerAux.color) {
            hit.bool = false
            
            let objUser = getUser()
            objUser.time = timer
            objUser.punctuation = punctuation
            
            setUser(playerAux.color, objUser)
            nav("/ranking")
        }
    })

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
            {!isOpenModal && !hit.bool &&
                <>
                    {!everyoneIsReady &&
                        <div>
                            <Navbar
                                timer={timer}
                                group={playerAux.color}
                                points={punctuation}
                                playerColor={playerAux.color}
                            />
                        </div>
                    }

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
