import { useState } from "react";
import { LoginUser } from "../../api/controller/userController";

const Homepage = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        await LoginUser();
        setLoggedIn(true);
    };

    return (
        <section className="col-12 col">
            <div className="paper">
                <div className="row flex-center">
                    <div className="text-center">
                        <h1>Welcome</h1>
                        <h3>Press below to begin</h3>
                    </div>
                </div>
                {loggedIn ? (
                    <div className="row flex-spaces">
                        <div className="alert alert-primary">
                            Reuming Session ...
                        </div>
                    </div>
                ) : (
                    <div className="row flex-center child-borders">
                        <a className="paper-btn margin" onClick={handleLogin}>
                            New Game
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Homepage;
