import { fetchMatches, fetchLeagues } from "./src";

const test = async () => {
  try {
    console.log('Fetching matches...');
    const matches = await fetchMatches({ mode: "yesterday" });
    console.log(matches);
  } catch (error) {
    console.error(error);
  }
  try {
    console.log('Fetching leagues...');
    const leagues = await fetchLeagues({ mode: "yesterday" });
    console.log(leagues);
  } catch (error) {
    console.error(error);
  }
};

test();
