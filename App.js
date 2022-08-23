import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { theme } from "./src/infrastructure/theme";
import { ThemeProvider } from "styled-components";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import {
    useFonts as useOswald,
    Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation/index";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

const firebaseApps = getApps();

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDSShanTH1Ueapcx93jp3GKMxVARVdqX54",
    authDomain: "mealstogo-db483.firebaseapp.com",
    projectId: "mealstogo-db483",
    storageBucket: "mealstogo-db483.appspot.com",
    messagingSenderId: "818441927787",
    appId: "1:818441927787:web:b28e4a54b816902de5052e",
};

if (!firebaseApps.length) {
    initializeApp(firebaseConfig);
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, "abc@mail.com", "qwerty")
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setIsAuthenticated(true);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            });
    }, []);

    const [oswaldLoaded] = useOswald({
        Oswald_400Regular,
    });
    const [latoLoaded] = useLato({
        Lato_400Regular,
    });
    if (!oswaldLoaded || !latoLoaded) {
        return null;
    }

    if (!isAuthenticated) {
        return null;
    }
    
    return (
        <>
            <ThemeProvider theme={theme}>
                <FavouritesContextProvider>
                    <LocationContextProvider>
                        <RestaurantsContextProvider>
                            <Navigation />
                        </RestaurantsContextProvider>
                    </LocationContextProvider>
                </FavouritesContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
