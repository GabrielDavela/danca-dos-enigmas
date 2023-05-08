import React, { useEffect, useReducer } from "react";
import { io } from "socket.io-client";

const socket = io("https://server-enigma-production.up.railway.app/", {
    autoConnect: false
})

// const socket = io("http://localhost:4000", {
//     autoConnect: false
// })

const GameContext = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "CONNECTED":
            return {
                ...state,
                isConnected: action.payload
            }
        case "PLAYER":
            return {
                ...state,
                player: action.payload
            }
        case "PLAYERS":
            return {
                ...state,
                players: action.payload
            }
        case 'ROOM':
            return {
                ...state,
                room: action.payload
            }
        case 'ROOMS':
            return {
                ...state,
                rooms: action.payload
            }
        case 'MATCH':
            return {
                ...state,
                match: action.payload
            }
        case 'UPDATE_RANKING':
            return {
                ...state,
                ranking: action.payload
            }
        case 'READY_PLAYERS':
            return {
                ...state,
                readyplayers: action.payload
            }
        case 'EVERYONE_IS_READY':
            return {
                ...state,
                everyoneIsReady: action.payload
            }
        case 'VERIFY_WORD':
            return {
                ...state,
                hit: action.payload
            }
        case 'GAME_PROCESS':
            return {
                ...state,
                gameInProcess: action.payload
            }
        case 'SIZE_WORD':
            return {
                ...state,
                sizeWord: action.payload
            }
        case 'TIMER_PROGRESS':
            return {
                ...state,
                timer: action.payload
            }
        case 'UPDATE_PUNCTUATION':
            return {
                ...state,
                punctuation: action.payload
            }
        case 'SHOW_TIP':
            return {
                ...state,
                showTip: action.payload
            }
        case 'SHOW_RANKING':
            return {
                ...state,
                showRanking: action.payload
            }
        default:
            return state
    }
}

const initialState = {
    isConnected: false,
    player: {},
    players: {},
    room: {},
    rooms: {},
    match: {},
    readyplayers: 0,
    everyoneIsReady: false,
    hit: {},
    gameInProcess: false,
    sizeWord: 0,
    timer: "",
    punctuation: 2000,
    ranking: [],
    showTip: false,
    showRanking: false
}

const GameProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {

        // O usuário vai se conectar por aqui
        socket.on('connect', () => {
            dispatch({ type: 'CONNECTED', payload: true })
        })

        // O usuário vai se desconectar por aqui
        socket.on('disconnect', () => {
            dispatch({ type: 'CONNECTED', payload: false })
        })

        // O player vai ser modificado... payload também
        socket.on('PlayersRefresh', (players) => {
            dispatch({ type: 'PLAYERS', payload: players })
            dispatch({ type: 'PLAYER', payload: players[socket.id] })
        })

        // No primeiro, vai passar uma lista de salas, no segundo apenas uma sala
        socket.on('RoomsRefresh', (rooms) => {
            dispatch({ type: 'ROOMS', payload: rooms })
            dispatch({ type: 'ROOM', payload: socket.id })
        })

        // É tipo o match do tinder ksksks
        socket.on('MatchRefresh', (match) => {
            dispatch({ type: 'MATCH', payload: match })
        })

        socket.on('ReadyPlayersRefresh', (contador) => {
            dispatch({ type: 'READY_PLAYERS', payload: contador })
        })

        socket.on('EveryoneIsReady', (bool) => {
            dispatch({ type: 'EVERYONE_IS_READY', payload: bool })
        })

        socket.on("FinishGame", (finish) => {
            dispatch({ type: 'VERIFY_WORD', payload: finish })
        })

        socket.on("GameInProcess", (bool) => {
            dispatch({ type: 'GAME_PROCESS', payload: bool })
        })

        socket.on("VerifySizeLetter", (size) => {
            dispatch({ type: 'SIZE_WORD', payload: size })
        })

        socket.on("TimerInProgress", (strTimer) => {
            dispatch({ type: 'TIMER_PROGRESS', payload: strTimer })
        })

        socket.on("UpdatePunctuation", (punctuation) => {
            dispatch({ type: 'UPDATE_PUNCTUATION', payload: punctuation })
            let objUser = getUser()
            objUser.punctuation = punctuation
            setUser("user", objUser)
        })

        socket.on("UpdateRanking", (ranking) => {
            dispatch({ type: "UPDATE_RANKING", payload: ranking })
            // window.location.reload()
        })

        socket.on("ShowTip", (bool) => {
            dispatch({ type: "SHOW_TIP", payload: bool })
        })

        socket.on("ShowRanking", (bool) => {
            dispatch({ type: 'SHOW_RANKING', payload: bool })
        })

        // Vai fazer com que autoConnect se transforme em true
        socket.open()

        return () => {
            socket.removeAllListeners()
        }
    }, [])

    return (
        <GameContext.Provider value={state}>
            {props.children}
        </GameContext.Provider>
    )
}

const createRoom = () => {
    socket.emit('CreateRoom')
}

const leaveRoom = () => {
    socket.emit('LeaveRoom')
}

const joinRoom = (roomId) => {
    socket.emit('JoinRoom', roomId)
}

const readyPlayer = (bool) => {
    socket.emit('ReadyPlayer', bool)
}

const verifyWord = (word, color) => {
    socket.emit('VerifyWord', { word, color })
}

const sizeWordFront = (color) => {
    socket.emit('SetLetters', color)
}

const timerGame = (match) => {
    socket.emit("TimerGame", match)
}

const sendResultRanking = (player) => {
    socket.emit("SendResultRanking", player)
}

const waitingPlayer = () => {
    socket.emit("WaitingPlayers")
}

const getUser = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const setUser = (type, objUser) => {
    localStorage.setItem(`${type}`, JSON.stringify(objUser))
}

export {
    GameContext,
    GameProvider,
    createRoom,
    leaveRoom,
    joinRoom,
    readyPlayer,
    verifyWord,
    sizeWordFront,
    timerGame,
    sendResultRanking,
    waitingPlayer,
    getUser,
    setUser
}