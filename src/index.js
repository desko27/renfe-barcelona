import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'material-ui/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import yellow from 'material-ui/colors/yellow';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import dotenv from 'dotenv';

dotenv.config();

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: yellow,
  },
});

function Root() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </MuiThemeProvider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
