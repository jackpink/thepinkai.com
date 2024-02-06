import { type Player, type Squad } from "./SupercoachSquadSelector"

const PlayerInfo = ({team, price}: {team: string, price: number}) => {
    const OuterDivStyle = {
        display: 'inline-block',
        paddingLeft: '10px'
    }
    const TextStyle = {
        margin: '0px',
        fontFamily: 'Arial'
    }

    const priceString = price.toString()

    return(<div style={OuterDivStyle}>
<p style={TextStyle}>{team}</p>
<p style={TextStyle}>{'$' + priceString}</p>
</div>)
}

const TeamColours = ({team}: {team: string}) => {
    let colours = ['white', 'white', 'white']
    switch (team) {
    case 'BUL':
        colours = ['blue', 'white', 'blue']
        break;
    case 'CBR':
        colours = ['green', 'white', 'yellow']
        break;
    case 'SHA':
        colours = ['blue', 'white', 'black']
        break;
    case 'MEL':
        colours = ['purple', 'white', 'purple']
        break;
    case 'NQL':
        colours = ['blue', 'yellow', 'blue']
        break;
    case 'GCT':
        colours = ['lightblue', 'white', 'lightblue']
        break
    case 'MNL':
        colours = ['red', 'white', 'red']
        break;
    case 'PEN':
        colours = ['black', 'white', 'black']
        break;
    case 'PAR':
        colours = ['blue', 'gold', 'blue']
        break;
    case 'NEW':
        colours = ['blue', 'red', 'blue']
        break;
    case 'NZW':
        colours = ['black', 'grey', 'black']
        break;
    case 'STI':
        colours = ['red', 'white', 'red']
        break;
    case 'SYD':
        colours = ['blue', 'white', 'red']
        break;
    case 'WST':
        colours = ['orange', 'white', 'black']
        break
    case 'DOL':
        colours = ['red', 'white', 'red']
        break;
    }

    const FlexBoxStyle = {
        display: 'flex'
    }
    const TeamColourLeftStyle = {
        width: '20px',
        height: 'auto',
        backgroundColor: colours[0],
        display: 'inline-block'
    }
    const TeamColourMidStyle = {
        width: '20px',
        height: 'auto',
        backgroundColor: colours[1],
        display: 'inline-block'
    }
    const TeamColourRightStyle = {
        width: '20px',
        height: 'auto',
        backgroundColor: colours[2],
        display: 'inline-block'
    }

    return(<div style={FlexBoxStyle}>

<div style={TeamColourLeftStyle}></div>
<div style={TeamColourMidStyle}></div>
<div style={TeamColourRightStyle}></div>
</div>)
}

const Player = ({player}: {player: Player}) => {
    const OuterDivStyle = {
        border: '1px solid black',
        borderRadius: '8px',
        width: '180px',
        overflow: 'hidden',
        display: 'inline-block'
    }
    const PlayerNameDivStyle = {
        backgroundColor: '#494B4C',
        margin: '0px',
        padding: '5px'
    }
    const PlayerNameTextStyle = {
        margin: '0px',
        color: 'white',
        fontFamily: 'Arial'
    }
    const PlayerInfoDivStyle = {
        padding: '10px',
        backgroundColor: '#C8C9C9'
    }
    return(
        <div style={OuterDivStyle}>
            <div style={PlayerNameDivStyle}>
                <p style={PlayerNameTextStyle}>{player.Name}</p>
            </div>
            <div style={PlayerInfoDivStyle}>
                <TeamColours team={player.Team}/>
                <PlayerInfo team={player.Team} price={player.Price}/>
            </div>
        </div>
    )
}

 export const DisplaySquad = ({squad}: {squad: Squad}) => {
    return(
        <div>
            <h1>Fullbacks</h1>
            {squad.Fullbacks.map((player, index) => <Player key={index} player={player}/>)}
            <h1>CentreWingers</h1>
            {squad.CentreWingers.map((player, index) => <Player key={index} player={player}/>)}
            <h1>FiveEights</h1>
            {squad.FiveEights.map((player, index) => <Player key={index} player={player}/>)}
            <h1>Halfbacks</h1>
            {squad.Halfbacks.map((player, index) => <Player key={index} player={player}/>)}
            <h1>FrontRowers</h1>
            {squad.FrontRowers.map((player, index) => <Player key={index} player={player}/>)}
            <h1>SecondRowers</h1>
            {squad.SecondRowers.map((player, index) => <Player key={index} player={player}/>)}
            <h1>Hookers</h1>
            {squad.Hookers.map((player, index) => <Player key={index} player={player}/>)}
        </div>
    )
}
