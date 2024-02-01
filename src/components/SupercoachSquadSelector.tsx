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
    const response = await fetch('https://www.boredapi.com/api/activity');
    return response.json();
}

const SupercoachSquadSelector = () => {

    const queryClient = useQueryClient();

    const {data} = useQuery({ queryKey: ['boredApi'], queryFn: boredApiQuery})
    console.log(data);

    return(
        <div>
        <h1>New Supercoach Squad Selector with API</h1>
        {data ? <p>{data.activity}</p> : <p>Loading...</p>}
        <button onClick={() => queryClient.invalidateQueries({queryKey: ['boredApi']})}>click me</button>
</div>
    )
}