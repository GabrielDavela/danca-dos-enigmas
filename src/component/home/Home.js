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
import { useNavigate } from "react-router-dom";

const Home = () => {

    const { isConnected, players, player, messages } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [scanner, setScanner] = useState(false)
    const [tip, setTip] = useState(false)
    const [insertWord, setInsertWord] = useState(false)

    const navigate = useNavigate();

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenScanner = () => {
        setInsertWord(false)
        setTip(false)
        setScanner(true)
    }

    const handleOpenTip = () => {
        setTip(true)
        setInsertWord(false)
        setScanner(false)
    }

    const handleOpenInsertWord = () => {
        setTip(false)
        setInsertWord(true)
        setScanner(false)
    }

    const handleClick = () => {
        navigate("/")
    }

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setScanner(false);
            }, 2000); // espera 2 segundos antes de chamar setScanner(false)
        }
    }, [])


    return (
        <div>

            {!isOpenModal &&
                <>
                    <button style={{ position: 'absolute', zIndex: '2000' }} onClick={handleClick}>Clica ai</button>
                    {insertWord &&
                        <InsertWord />
                    }
                    {tip &&
                        <Tip />
                    }
                    {scanner &&
                        <Scanner />
                    }
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
