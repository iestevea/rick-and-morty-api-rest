import { createMuiTheme } from '@material-ui/core/styles';
import { Theme } from "./theme.vm";
import merge from "lodash.merge"

const defaultTheme = createMuiTheme();

export const theme: Theme = merge(defaultTheme, {
  palette: {
    primary: {
      main: '#CD5D7D'
    },
    secondary: {
      main: '#AA5B8C'
    },
    success: {
      main: '#18822D',
    },
    warning: {
      main: '#C65F49',
    },
    info: {
      main: '#815B8E',
    },
    table: {
      row: {
        main: '#5A5884',
      },
    },

  }
} as Theme);
