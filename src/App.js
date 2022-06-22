import { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { API } from "aws-amplify";
import topIngredients from "./ingredients";
import { createIngredient } from "./graphql/mutations";
// import { onCreateIngredient } from "./graphql/subscriptions";

function App() {
  const [ingredients, setIngredinets] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to a new start of meals planner
      </header>
    </div>
  );
}

export default withAuthenticator(App);
