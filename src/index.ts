import axios from 'axios';
import { Match } from './types/internal';
import { APIResponse } from './types/external';

const BASE_URL = 'https://api.promiedos.com.ar'

export async function fetchPromiedos({ mode = 'live' }: { mode?: 'today' | 'live' | 'yesterday' | 'tomorrow' } = {}): Promise<Match[]> {

  let url = '';

  switch (mode) {
    case 'live':
      url = BASE_URL + '/games/today';
      break;
    case 'yesterday':
    case 'tomorrow':
    case 'today':
      url = BASE_URL + '/games/' + mode;
      break;
    default:
      throw new Error('Invalid mode');
  }

  // Fetch the HTML
  const response = await axios.get<APIResponse>(url);
  const matches: Match[] = [];

  const data = response.data;

  for (const league of data?.leagues) {
    for (const game of league.games) {
      const [team1, team2] = game.teams;
      const [score1, score2] = game.scores;
      matches.push({
        league: league.name,
        time: game.start_time,
        status: game.status,
        team1: {
          ...team1,
          logo: `${BASE_URL}/images/team/${team1.id}/1`,
          name: team1.name,
          score: String(score1 ?? 0),
        },
        team2: {
          ...team2,
          logo: `${BASE_URL}/images/team/${team2.id}/1`,
          name: team2.name,
          score: String(score2 ?? 0),
        },
      })
    }
  }

  return matches;
}