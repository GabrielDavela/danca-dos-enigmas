import { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";
import InsertWord from "../insertWord/InsertWord";
import Tip from "../tip/Tip";

const Home = () => {

    const { isConnected, players, player, messages } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [scanner, setScanner] = useState(true)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)
    const [chat, setChat] = useState(false)

    // const optionsMenu = {
    //     scanner: true,
    //     tip: false,
    //     insertWord: false,
    //     chat: false
    // }

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleCloseOpenScanner = () => {
        setScanner(false)
        setTip(false)
    }

    const handleCloseOpenTip = () => {
        setTip(true)
    }

    const handleCloseOpenInsertWord = () => {
        setInsertWord(true)
        setTip(false)
    }

    return (
        <div>

            {!isOpenModal &&
                <>
                    <Menu
                        onScannerClick={handleCloseOpenScanner}
                        onTipClick={handleCloseOpenTip}
                        onInsertWordClick={handleCloseOpenInsertWord}
                    />
                    {insertWord &&
                        <InsertWord />
                    }
                    {tip &&
                        <Tip />
                    }
                    {scanner &&
                        <Scanner player={player} />
                    }
                    {/* {optionsMenu.chat &&
                        <Chat sendMessage={sendMessage} messages={messages} />
                    } */}
                </>
            }

            {isOpenModal &&
                <ChooseTeam player={player} handleCloseModal={handleCloseModal} />
            }
        </div>
    )
}

export default Home;