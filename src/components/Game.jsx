import { useState } from "react";
import { deleteSession } from "../../api/controller/userController";

const Game = ({ user }) => {
    const handleLogout = async (e) => {
        deleteSession();

        dispatch({ type: FetchState.FETCH_INIT });
        try {
            await api.deleteCurrentSession();
            dispatch({ type: FetchState.FETCH_SUCCESS, payload: null });
        } catch (e) {
            dispatch({ type: FetchState.FETCH_FAILURE });
        }
    };

    return (
        <>
            <section className="">
                <div className="">GAMEEE</div>
            </section>

            <section className="">
                {/* <button onClick={handleLogout} className="">
                    Logout 👋
                </button>{" "} */}
            </section>
        </>
    );
};

export default Game;
