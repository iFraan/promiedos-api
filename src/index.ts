import axios from 'axios';
import *  as cheerio from 'cheerio';
import { Match } from './types/internal';

const BASE_URL = 'https://www.promiedos.com.ar/'

export async function fetchPromiedos({ mode = 'live' }: { mode?: 'live' | 'yesterday' | 'tomorrow' } = {}): Promise<Match[]> {

  let url = '';

  switch (mode) {
    case 'live':
      url = BASE_URL;
      break;
    case 'yesterday':
      url = BASE_URL + '/ayer';
      break;
    case 'tomorrow':
      url = BASE_URL + '/man';
      break;
    default:
      throw new Error('Invalid mode');
  }

  // Fetch the HTML
  const response = await axios.get(url);
  const html = response.data;


  const $ = cheerio.load(html);
  const matches = [];

  // Find all league sections using div[class] that contain matches
  $('#partidos div[id="fixturein"]').each((_, div) => {
    const league = $(div).find('tr.tituloin a').text().trim();

    $(div).find('tr').each((_, row) => {
      // Only process rows with match data
      if (!$(row).attr('id') || $(row).hasClass('tituloin') || $(row).hasClass('goles')) {
        return;
      }

      const match = {
        league,
        time: $(row).find('td:first-child').text().trim(),
        team1: {
          name: $(row).find('.datoequipo').first().text().trim(),
          score: $(row).find('span[id^="r1"]').text().trim(),
          logo: $(row).find('.game-t1 img').first().attr('src')
        },
        team2: {
          name: $(row).find('.datoequipo').last().text().trim(),
          score: $(row).find('span[id^="r2"]').text().trim(),
          logo: $(row).find('.game-t1 img').last().attr('src')
        }
      };

      matches.push(match);
    });
  });

  return matches;
}