import { useContext } from "react";
import { GameContext, sendMessage } from "../../context/GameContext";
import Chat from "../chat/Chat";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";
import Scanner from "../scanner/Scanner";

const Home = () => {

    const { isConnected, players, messages } = useContext(GameContext)

    return (
        <>
            {/* {!isConnected &&
                <div>Desconectado, conectando...</div>
            } */}

            {/* <PlayerList players={players}/>
            <Rooms />
            <Chat sendMessage={sendMessage} messages={messages}/> */}
            <Scanner />

        </>
    )
}

export default Home;