import './App.css';

import indigo from '@material-ui/core/colors/indigo'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';

// 基本となる色を指定
const theme = createMuiTheme({
  palette:{
    primary: indigo,
    secondary: {
      main:'#f44336'
    },
  },
  typography: {
    fontFamily:'Comic Neue',
  },
});

function App() {
  return (
    <MuiThemeProvider theme = {theme}>

    </MuiThemeProvider>
  );
}

export default App;
