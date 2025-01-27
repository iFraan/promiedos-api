export type Calendar = {
    players: {
        name: string;
        team: string;
        text: string;
    }[];
    title: string;
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
    games: Game[];
}

export type Game = {
    id: string;
    stage_round_name: string;
    winner: number;
    teams: Team[];
    url_name: string;
    status: {
        enum: number;
        name: string;
        short_name: string;
        symbol_name: string;
    };
    start_time: string;
    game_time: number;
    game_time_to_display: string;
    game_time_status_to_display: string;
    tv_networks?: {
        id: string;
        name: string;
    }[];
    main_odds?: {
        options: {
            name: string;
            value: number;
            trend: number;
        }[];
    };
}

export type Team = {
    name: string;
    short_name: string;
    url_name: string;
    id: string;
    country_id: string;
    red_cards: number;
}

export type APIResponse = {
    leagues: League[];
    calendar: Calendar;
    TTL: number;
    cache_time: number;
}
