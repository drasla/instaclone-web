import {HashRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact>

                    </Route>
                    <Route path="/potato">

                    </Route>
                    <Route path="/banana">

                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
