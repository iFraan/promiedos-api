import axios from 'axios';
import *  as cheerio from 'cheerio';
import { Match } from './types/internal';

const BASE_URL = 'https://www.promiedos.com.ar/'

export async function fetchPromiedos({ mode = 'live' }: { mode?: 'live' | 'yesterday' } = {}): Promise<Match[]> {

  let url = '';

  switch (mode) {
    case 'live':
      url = BASE_URL;
      break;
    case 'yesterday':
      url = BASE_URL + '/ayer';
      break;
    default: 
      throw new Error('Invalid mode');
  }

  // Fetch the HTML
  const response = await axios.get(url);
  const html = response.data;
  
  // Load HTML into cheerio
  const $ = cheerio.load(html);
  
  const matches: Match[] = [];
  
  // Parse each fixture table
  $('#fixturein table').each((_, table) => {
    const league = $(table).find('.tituloin').text().trim();
    
    // Get match rows
    $(table).find('tr[id^="1_"], tr[id^="12_"], tr[id^="11_"]').each((_, row) => {
      matches.push({
        league,
        time: $(row).find('.game-time').text().trim(),
        team1: {
          name: $(row).find('.game-t1 .datoequipo').first().text().trim(),
          logo: $(row).find('.game-t1 img').first().attr('src'),
          score: $(row).find('.game-r1 span').text().trim()
        },
        team2: {
          name: $(row).find('.game-t1:last .datoequipo').text().trim(),
          logo: $(row).find('.game-t1:last img').attr('src'), 
          score: $(row).find('.game-r2 span').text().trim()
        }
      });
    });
  });

  return matches;
}