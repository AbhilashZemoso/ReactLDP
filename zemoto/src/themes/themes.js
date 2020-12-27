import { createMuiTheme } from "@material-ui/core/styles";
//import { COLORS } from "./constants";
/*
declare module "@material-ui/core/styles/createMuiTheme" {
  interface ThemeOptions {
    themeName: string;
  }
}
*/

const palette = {
  /*
  primary: {
    dark: COLORS.ALPHA_PRIMARY_COLOR_900,
    main: COLORS.ALPHA_PRIMARY_COLOR_700,
    light: COLORS.ALPHA_PRIMARY_COLOR_500,
  },
  //To be used for text
  secondary: {
    dark: COLORS.GAMMA_TEXT_900,
    main: COLORS.GAMMA_TEXT_700,
    light: COLORS.GAMMA_TEXT_500,
  },
  white: {
    dark: COLORS.ALPHA_PRIMARY_COLOR_100,
    main: COLORS.GAMMA_WHITE,
    light: COLORS.GAMMA_BACKGROUND,
  },
  success: {
    main: COLORS.GAMMA_SUCCESS,
  },
  error: {
    main: COLORS.GAMMA_ERROR,
  },
  danger: {
    main: COLORS.GAMMA_WARNING,
  },
  link: {
    main: COLORS.GAMMA_LINK,
  },
  */
};

const overrides = {
  MuiTypography: {
    root: {
      color: "#cccccc",
    }
  },
  MuiInput: {
    underline: {
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },
  },
  MuiInputBase: {
    input: {
      padding: "7px 0 7px ",
    },
  },
  MuiInputAdornment: {
    root: {
      padding: "0 0 2px 8px",
    },
  },
  MuiFilledInput: {
    root: {
      backgroundColor: "transparent",
    },
    underline: {
      "&::before": {
        display: "none",
      },
      "&::after": {
        display: "none",
      },
    },
    input: {
      padding: "12px 12px 10px",
      //  background: "white",
    },
    "&:Mui-focused": {
      border: "1px solid white",
    },
  },
  MuiOutlinedInput: {
    multiline: {
      padding: 0,
      paddingTop: 10,
      paddingLeft: 2,
      paddingRight: 4,
      paddingBottom: 10,
    },
    adornedStart: {
      paddingLeft: 0,
    },
    root: {
      borderRadius: 2,
    }
  },
 
  
  MuiPaper: {
    elevation24: {
      boxShadow: "none",
    },
  },
  MuiCardContent: {
    root: {
      padding: "13px",
    },
  },
  MuiButton: {
    root: {
      borderRadius: "2px",
      height: "36px",
    },
    contained: {
      boxShadow: "none",
      height: "36px",
    },
    outlined: {
      boxShadow: "none",
      height: "36px",
    },
    containedSecondary: {
      backgroundColor: palette.primary.light,
      "&:disabled": {
        color: palette.primary.light,
       // backgroundColor: COLORS.ALPHA_PRIMARY_COLOR_300,
      },
      "&:hover": {
        backgroundColor: palette.primary.light,
      },
    },
    containedPrimary: {
     // color: COLORS.GAMMA_WHITE,
      backgroundColor: palette.primary.main,
      "&:disabled": {
        color: palette.primary.light,
       // backgroundColor: COLORS.ALPHA_PRIMARY_COLOR_300,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        boxShadow: "0px 2px 4px rgba(48, 49, 51, 0.1)",
      },
    },
    outlinedSecondary: {
      color: palette.primary.main,
      borderColor: palette.primary.main,
      "&:disabled": {
    //    color: COLORS.ALPHA_PRIMARY_COLOR_300,
     //   borderColor: COLORS.ALPHA_PRIMARY_COLOR_300,
      },
    },
    outlinedPrimary: {
      color: palette.secondary.dark,
      borderColor: palette.secondary.dark,
      "&:disabled": {
    //    color: COLORS.ALPHA_PRIMARY_COLOR_300,
    //    borderColor: COLORS.ALPHA_PRIMARY_COLOR_300,
      },
      "&:hover": {
        backgroundColor: palette.primary.main,
        boxShadow: "0px 2px 4px rgba(48, 49, 51, 0.1)",
      },
    },
  },
  // },
  MuiToggleButtonGroup: {
    root: {
      backgroundColor: "#F5F8FA",
    },
  },
  MuiAutocomplete: {
    popper: {
      width: "600px",
      borderBottom: "1px solid black",
    },
  },
};

const themeName = "theme";
const theme = createMuiTheme({ palette, overrides, themeName });

export default theme;
