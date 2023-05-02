import React, { useContext } from "react";
import { createRoom, GameContext, joinRoom, leaveRoom } from "../../context/GameContext";
import Button from "../button/Button";
import iconEnter from "../../assets/screens/iconEnter.svg";
import lineRoom from "../../assets/screens/lineRoom.svg"
import "./Rooms.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Rooms = () => {

    const { player, rooms, room, gameInProcess } = useContext(GameContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(gameInProcess) navigate("/home")
    }, [gameInProcess])

    return (
        <div className="container__principal">
            {!gameInProcess &&
                <>
                    <span className="span__rooms">
                        <br />
                        Salas
                        {!player.room &&
                            <div className="container__higher">
                                <div className="button__home">
                                    <Button
                                        text={"Criar sala"}
                                        functionB={createRoom} />
                                </div>
                            </div>
                        }
                        <img src={lineRoom} />
                    </span>
                    <div className="container__enter__room">
                        {
                            !player.room &&
                            Object.keys(rooms).map((key) =>
                                <div key={`room_${key}`}>
                                    {/* {rooms[key].name} */}
                                    <button className="enter__room" onClick={() => joinRoom(key)}>Entrar na sala <img src={iconEnter} /></button>
                                </div>
                            )
                        }
                    </div>
                    {
                        player.room && room &&
                        <div>
                            {
                                rooms[player.room] && rooms[player.room] &&
                                // Aqui vai ter uma validação para lerem a proposta do jogo, 
                                // mas ela só vai aparecer quando os 4 jogadores estiverem na sala
                                <div>
                                    <span>{room.name}</span>
                                    <Button
                                        text={"Sair"}
                                        functionB={leaveRoom} />
                                </div>
                            }
                        </div>
                    }
                </>
            }
        </div>
    )
}

export default Rooms;