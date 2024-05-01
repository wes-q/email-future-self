import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";

function App() {
    // const [currentUser, setCurrentUser] = useState("");
    // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    // useEffect(() => {
    //     getLocalUserFromBrowser();
    // }, [currentUser]);

    // const getLocalUserFromBrowser = () => {
    //     const loggedUserName = window.localStorage.getItem("loggedUserName");
    //     if (loggedUserName) {
    //         setCurrentUser(loggedUserName);
    //         setIsUserLoggedIn(true);
    //     }
    // };

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />
                <Route path="login" element={<LoginPage />} />
            </>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
