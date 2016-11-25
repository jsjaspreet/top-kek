// third party imports imports
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
// local imports
import store from "./store"
import App from "./components/App"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// render the routed application
ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
)
