import { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";
import Scanner from "../scanner/Scanner";
import Menu from "../menu/Menu";
import Tip from '../tip/Tip';

const Home = () => {

    const { isConnected, players, player, messages } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)
    const [scanner, setScanner] = useState(true)
    const [tip, setTip] = useState(false)

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    const handleOpenScanner = () => {
        setScanner(true)
        setTip(false)
    }

    const handleOpenTip = () => {
        setScanner(false)
        setTip(true)
    }

    useEffect(() => {
        return (() => {
            setScanner(false)
        })
    }, [])

    return (
        <div>
            <button style={{position: 'absolute', zIndex: '2000'}} onClick={() => setScanner(false)}>Click</button>

            {!isOpenModal &&
                <>
                    {scanner &&
                        <Scanner />
                    }
                    {tip &&
                        <Tip />
                    }
                    <Menu 
                        onScannerClick={() => handleOpenScanner()}
                        onTipClick={() => handleOpenTip()}
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