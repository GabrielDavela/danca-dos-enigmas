import { useContext } from "react";
import { createRoom, GameContext, joinRoom } from "../../context/GameContext";

const Rooms = (props) => {

    const { player, room, rooms } = useContext(GameContext)

    return (
        <>

        <span>Salas</span>
        {!player.room && <button onClick={createRoom}>Criar sala</button>}
        {
            !player.room &&
            
            Object.keys(rooms)
                .map((key) => {
                    <div key={`room_${key}`}>
                        {rooms[key].name}
                        <button onClick={() => joinRoom(key)}>Entrar</button>
                    </div>
                })
        }

        </>
    )
}

export default Rooms;