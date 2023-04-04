import { useContext, useEffect, useState } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import ChooseTeam from "../chooseteam/ChooseTeam";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";
import Scanner from "../scanner/Scanner";

const Home = () => {

    const { isConnected, players, player, messages } = useContext(GameContext)
    const [isOpenModal, setIsOpenModal] = useState(true)

    const handleCloseModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div>
            {/* {!isConnected &&
                <div>Desconectado, conectando...</div>
            } */}

            {/* <PlayerList players={players}/>
            <Rooms />
            <Chat sendMessage={sendMessage} messages={messages}/> */}
            {!isOpenModal &&
                <Scanner player={player} />
            }
            
            {isOpenModal &&
                <ChooseTeam player={player} handleCloseModal={handleCloseModal} />
            }
        </div>
    )
}

export default Home;