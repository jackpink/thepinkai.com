import {QueryClient, QueryClientProvider, useQuery, useQueryClient} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DisplaySquad } from "./SupercoachDisplaySquad";

export type Squad = {
    Fullbacks: Player[];
    CentreWingers: Player[];
    FiveEights: Player[];
    Halfbacks: Player[];
    FrontRowers: Player[];
    SecondRowers: Player[];
    Hookers: Player[];
}

export type Player = {
    Name: string;
    Price: number;
    Team: string;
}

function isPlayer(player: any): player is Player {
    return (
      typeof player === "object" &&
      player !== null &&
      "Name" in player &&
      
      "Price" in player &&
        "Team" in player
    );
  }

const isSquad = (squad: any): squad is Squad => {
    return (
        typeof squad === "object" &&
        squad !== null &&
        "Fullbacks" in squad &&
        squad["Fullbacks"].every(isPlayer) &&
        "CentreWingers" in squad &&
        squad["CentreWingers"].every(isPlayer) &&
        "FiveEights" in squad &&
        squad["FiveEights"].every(isPlayer) &&
        "Halfbacks" in squad &&
        squad["Halfbacks"].every(isPlayer) &&
        "FrontRowers" in squad &&
        squad["FrontRowers"].every(isPlayer) &&
        "SecondRowers" in squad &&
        squad["SecondRowers"].every(isPlayer) &&
        "Hookers" in squad &&
        squad["Hookers"].every(isPlayer)
    );
}

const SupercoachSquadSelectorApp = () => {

    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
            <SupercoachSquadSelector/>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    )
}

export default SupercoachSquadSelectorApp;

const getSquadApiQuery = async () => {
    const response = await fetch('https://nrl-supercoach-ai-46zughvc3a-ts.a.run.app/');
    const squad = await response.json();
    if (isSquad(squad)) {
        return squad
    }
    throw new Error("Invalid response");
}

const SupercoachSquadSelector = () => {

    const queryClient = useQueryClient();

    const {data: squad, error, refetch} = useQuery({ queryKey: ['getSquadApi'], queryFn: getSquadApiQuery, enabled: false})
    // console.log(squad);

    return(
        <div>
        <h1>New Supercoach Squad Selector with API</h1>
        <SelectSquadInputs />
        {squad? <DisplaySquad squad={squad} />: <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <button onClick={() => refetch()}>click me</button>
</div>
    )
}


const SelectSquadInputs = () => {

    return(
        <div>
            <label >Year:</label>
            <select>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
            </select>
            <label>Number of Rookies:</label>
            <select>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </select>
            <label>Method to Predict Player Score:</label>
            <select>
                <option>Average from previous seasons</option>
                <option>Neural Network</option>
              
                </select>
        </div>
    )
}