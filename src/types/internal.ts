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
        goals?: {
            player_name: string;
            player_sname: string;
            time: number;
            time_to_display: string;
            goal_type?: string;
        }[];
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

export type League = {
    name: string;
    id: string;
    url_name: string;
    country_id: string;
    show_country_flags: boolean;
    allow_open: boolean;
    country_name: string;
    is_international: boolean;
    matches: Match[];
}
