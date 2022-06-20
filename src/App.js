import { useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import { API } from "aws-amplify";
import topIngredients from "./ingredients";
import { createIngredient } from "./graphql/mutations";
// import { onCreateIngredient } from "./graphql/subscriptions";

async function postIngredients() {
  let index = 2;
  while (index < topIngredients.length) {
    const result = await API.graphql({
      query: createIngredient,
      variables: { input: { name: topIngredients[index], type: "OTHER" } },
    });
    console.log("ingredient: ", topIngredients[index]);
    index++;
  }
  console.log("done");
}

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
