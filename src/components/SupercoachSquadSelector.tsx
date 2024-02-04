import {QueryClient, QueryClientProvider, useQuery, useQueryClient} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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

const boredApiQuery = async () => {
    const response = await fetch('https://nrl-supercoach-ai-46zughvc3a-ts.a.run.app/');
    return response.json();
}

const SupercoachSquadSelector = () => {

    const queryClient = useQueryClient();

    const {data, error} = useQuery({ queryKey: ['boredApi'], queryFn: boredApiQuery})
    console.log(data);

    return(
        <div>
        <h1>New Supercoach Squad Selector with API</h1>
        {data && data["Fullbacks"] && data["Fullbacks"][0] ? <p>{data["Fullbacks"][0].Name}</p> : <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <button onClick={() => queryClient.invalidateQueries({queryKey: ['boredApi']})}>click me</button>
</div>
    )
}