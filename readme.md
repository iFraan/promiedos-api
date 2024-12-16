<div align="center">
	<h1>promiedos-api</h1>
	<a href="https://www.codefactor.io/repository/github/ifraan/promiedos-api"><img src="https://www.codefactor.io/repository/github/ifraan/promiedos-api/badge" alt="CodeFactor" /></a>
	<a href="https://www.npmjs.com/package/promiedos-api"><img src="https://badgen.net/npm/v/promiedos-api?color=blue" alt="NPM-Version"/></a>
	<a href="https://www.npmjs.com/package/promiedos-api"><img src="https://badgen.net/npm/dt/promiedos-api?color=blue" alt="NPM-Downloads"/></a>
	<a href="https://github.com/iFraan/promiedos-api"><img src="https://badgen.net/github/stars/iFraan/promiedos-api?color=yellow" alt="Github Stars"/></a>
	<a href="https://github.com/iFraan/promiedos-api/issues"><img src="https://badgen.net/github/open-issues/iFraan/promiedos-api?color=green" alt="Issues"/></a>
	<h2>This a wrapper/scrapper of the <a href="https://www.promiedos.com.ar/">Promiedos.com.ar</a> site.</h2>
	<h3>There is no API key required.</h3>
</div>

## Installation

To install use:
```shell
npm i promiedos-api
```
## Usage

```js
const matches = await fetchPromiedos({ mode?: "yesterday" | "live" }); // live is the default
console.log(matches);
/* 
type Match = {
    league: string;
    time: string;
    team1: {
        name: string;
        score: string;
        logo?: string;
    };
    team2: {
        name: string;
        score: string;
        logo?: string;
    };
}[]
*/
```

## Disclaimer
This project is fully made for educational purposes