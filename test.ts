import { fetchPromiedos } from "./src";

const test = async () => {
    try {
        const matches = await fetchPromiedos({ mode: 'yesterday'});
        console.log(matches);
    } catch (error) {
        console.error(error);
    }
};


test()