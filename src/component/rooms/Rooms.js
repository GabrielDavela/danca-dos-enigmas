import React, { useContext } from "react";
import { createRoom, GameContext, joinRoom, leaveRoom } from "../../context/GameContext";

const Rooms = () => {

    const { player, rooms, room } = useContext(GameContext)

    return (
        <div>
            <span>
                Salas
                {!player.room && <button onClick={createRoom}>Criar sala</button>}
            </span>
            {
                !player.room &&

                Object.keys(rooms).map((key) =>
                    <div key={`room_${key}`}>
                        {rooms[key].name}
                        <button onClick={() => joinRoom(key)}>Entrar</button>
                    </div>
                )
            }
            {
                player.room && room &&
                <div>
                    {
                        rooms[player.room] && rooms[player.room] &&
                        // Aqui vai ter uma validação para lerem a proposta do jogo, 
                        // mas ela só vai aparecer quando os 4 jogadores estiverem na sala
                        <div>
                            <span>{room.name}</span>
                            <button onClick={leaveRoom}>Sair</button>
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default Rooms;