
const PlayerList = (props) => {
    return (
        <div>
            <span>Jogadores</span>
            {Object.keys(props.players)
                .map((key) => (
                    <div key={key}>{props.players[key].name}</div>
                ))
            }
        </div>
    )
}

export default PlayerList;