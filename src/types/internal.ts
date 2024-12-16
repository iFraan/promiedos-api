export type Match = {
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
}