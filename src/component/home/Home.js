import { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";
import InsertWord from '../insertWord/InsertWord';
import Tip from '../tip/Tip';
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";

const Home = () => {

    const { isConnected, players, player, messages } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [scanner, setScanner] = useState(false)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenScanner = () => {
        setTip(false)
        setInsertWord(false)
    }

    const handleOpenTip = () => {
        setTip(true)
        setInsertWord(false)
    }

    const handleOpenInsertWord = () => {
        setTip(false)
        setInsertWord(true)
    }


    return (
        <div>

            {!isOpenModal &&
                <>
                    {insertWord &&
                        <InsertWord />
                    }
                    {tip &&
                        <Tip />
                    }
                    <Scanner />
                    <Menu
                        onScannerClick={() => handleOpenScanner()}
                        onTipClick={() => handleOpenTip()}
                        onInsertWordClick={() => handleOpenInsertWord()}
                    />
                </>
            }

            {isOpenModal &&
                <ChooseTeam player={player} handleCloseModal={handleCloseModal} />
            }
        </div>
    )
}

export default Home;
