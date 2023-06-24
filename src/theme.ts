import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#11cb5f",
    },
  },
});

theme.typography.h1 = {
  [theme.breakpoints.down("sm")]: {
    fontSize: "3rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "6rem",
  },
};

theme.typography.h2 = {
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.5rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "3rem",
  },
};

theme.typography.h3 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.75rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "2.25rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2.5rem",
  },
};

theme.typography.h4 = {
  [theme.breakpoints.up("xs")]: {
    fontSize: "1.5",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.5",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.75",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "2rem",
  },
};

theme.typography.h5 = {
  [theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "1.5rem",
  },
};

// theme.typography.h6 = {
//   [theme.breakpoints.up('xs')]: {
//     fontSize: '2rem'
//   },
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '3rem'
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '4rem'
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '5rem'
//   },
//   [theme.breakpoints.up('xl')]: {
//     fontSize: '6rem'
//   }
// }

// theme.typography.body1 = {
//   [theme.breakpoints.up('md')]: {
//     fontSize: '0.75rem'
//   },
//   [theme.breakpoints.up('lg')]: {
//     fontSize: '1rem'
//   },
//   [theme.breakpoints.up('xl')]: {
//     fontSize: '1rem'
//   }
// }

export default theme;
