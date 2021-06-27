import { render } from "react-dom";
import {BrowserRouter as Router } from "react-router-dom"
import App from "./App";
import {QuizProvider} from "./Context/quizContext"

const rootElement = document.getElementById("root");
render(
        <Router>
          <QuizProvider>
          <App />
          </QuizProvider>
        </Router>
      , rootElement);
