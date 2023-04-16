import React, { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage, sizeWordFront } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import InsertWord from '../insertWord/InsertWord';
import Tip from '../tip/Tip';
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";

const Home = () => {

    const { player, messages, everyoneIsReady, url, sizeWord } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)

    const loader = document.querySelector(".loader")
    const scanning = document.querySelector(".scanning")

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

    useEffect(() => {
        sizeWordFront(player.color)
    })

    return (
        <div>

            {!isOpenModal &&
                <>
                    {insertWord &&
                        <InsertWord player={player}/>
                    }
                    {tip &&
                        <Tip player={player} sizeWord={sizeWord} />
                    }
                    <Scanner />
                    {/* {
                        <Chat />
                    } */}
                    {!everyoneIsReady &&
                        <Menu
                            onScannerClick={() => handleOpenScanner()}
                            onTipClick={() => handleOpenTip()}
                            onInsertWordClick={() => handleOpenInsertWord()}
                        />
                    }
                </>
            }

            {isOpenModal &&
                <ChooseTeam player={player} handleCloseModal={handleCloseModal} />
            }
        </div>
    )
}

export default Home;
