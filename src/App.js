import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { API } from "aws-amplify";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to a new start of meals planner
      </header>
    </div>
  );
}

export default withAuthenticator(App);
