export const COLORS = {
    primary_blue: '#2ab6c8',
    primary_orange: '#F06F2F',
    primary_gray: '#938e88',
    secondary_cyan: '#00687f',
    secondary_blue: '#003366',
    background: '#f8f9fe'
} as const;

export const TEXT_COLORS = {
    gray: '#4d4d4d',
    green: '#1AB800',
    red: '#BE0000',
    black: '#000000',
    white: '#F8F9FE'
} as const;

export const ALL_COLORS = {
    ...COLORS,
    ...TEXT_COLORS
} as const;
