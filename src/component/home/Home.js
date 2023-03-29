import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import PlayerList from "../playerlist/PlayerList";
import Rooms from "../rooms/Rooms";

const Home = () => {

    const { isConnected, players } = useContext(GameContext)

    return (
        <>
            {!isConnected &&
                <div>Desconectado, conectando...</div>
            }

            <PlayerList players={players}/>
            <Rooms />

        </>
    )
}

export default Home;