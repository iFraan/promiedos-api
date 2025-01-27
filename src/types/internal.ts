export type Match = {
    league: string;
    time: string;
    team1: {
        name: string;
        score: string;
        logo?: string;
        short_name?: string;
        id?: string;
        red_cards?: number;
        country_id?: string;
    };
    team2: {
        name: string;
        score: string;
        logo?: string;
        short_name?: string;
        id?: string;
        red_cards?: number;
        country_id?: string;
    };
    id?: string;
    stage_round_name?: string;
    status?: {
        enum: number;
        name: string;
        short_name: string;
    };
    tv_networks?: {
        id: string;
        name: string;
    }[];
    odds?: {
        name: string;
        value: number;
        trend: number;
    }[];
}
