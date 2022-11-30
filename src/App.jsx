import {
    BrowserRouter as Router,
    Route,
    Navigate,
    Routes,
} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components/macro";
import { getUser, LoginUser } from "../api/controller/userController";
import Homepage from "./components/Home";
import Game from "./components/Game";
import "./paper.css";

function App() {
    const [player, setPlayer] = useState(false);
    const Player = async () => {
        try {
            const player = await getUser();
            return player;
        } catch (error) {
            console.log(error);
        }
    };

    Player().then((payload) => setPlayer(payload));
    console.log(player);

    return (
        <div id="top" className="row site">
            <Router>
                <Routes>
                    <Route
                        path="/game"
                        element={
                            player ? (
                                <Game user={player} />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/"
                        element={
                            player ? <Navigate to="/game" /> : <Homepage />
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
