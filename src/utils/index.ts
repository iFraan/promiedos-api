import { Game, League } from "../types/external";
import { Match } from "../types/internal";

const BASE_URL = 'https://api.promiedos.com.ar';

export const mapGamesToMatches = (games: Game[], league: League): Match[] => {
  const matches: Match[] = [];
  for (const game of league.games) {
    const [team1, team2] = game.teams;
    const [score1, score2] = game.scores ?? [0, 0];
    matches.push({
      league: league.name,
      time: game.start_time,
      status: game.status,
      team1: {
        ...team1,
        logo: `${BASE_URL}/images/team/${team1.id}/1`,
        name: team1.name,
        score: String(score1),
      },
      team2: {
        ...team2,
        logo: `${BASE_URL}/images/team/${team2.id}/1`,
        name: team2.name,
        score: String(score2),
      },
    })
  }
  return matches;
}