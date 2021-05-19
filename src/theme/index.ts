import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    alert: {
        success: '#5e9850',
        warning: '#db8818',
        danger: '#f44336',
    },
    dark: {
        colors: {
            primary: {
                color: '#000000',
                contrast: '#ffffff'
            }
        }
    },
    light: {
        colors: {
            primary: {
                color: '#ffffff',
                contrast: '#000000'
            }
        }
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;