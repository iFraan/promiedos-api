import axios from 'axios';
import { League, Match } from './types/internal';
import { APIResponse } from './types/external';
import { mapGamesToMatches } from './utils';

const BASE_URL = 'https://api.promiedos.com.ar'

export async function fetchMatches({ mode = 'today' }: { mode?: 'today' | 'live' | 'yesterday' | 'tomorrow' } = {}): Promise<Match[]> {

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

  for (const league of data.leagues ?? []) {
    const _matches = mapGamesToMatches(league.games, league)
    matches.push(..._matches)
  }

  return matches;
}

export async function fetchLeagues({ mode = 'today' }: { mode?: 'today' | 'live' | 'yesterday' | 'tomorrow' } = {}): Promise<League[]> {

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
  const leagues: League[] = [];

  const data = response.data;

  for (const league of data.leagues ?? []) {
    leagues.push({
      ...league,
      matches: mapGamesToMatches(league.games, league)
    })
  }

  return leagues;
}

export const fetchPromiedos = fetchMatches;