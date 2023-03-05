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
import { useEffect, useState } from "react";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDSShanTH1Ueapcx93jp3GKMxVARVdqX54",
    authDomain: "mealstogo-db483.firebaseapp.com",
    projectId: "mealstogo-db483",
    storageBucket: "mealstogo-db483.appspot.com",
    messagingSenderId: "818441927787",
    appId: "1:818441927787:web:b28e4a54b816902de5052e",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const auth = firebase.auth();
        signInWithEmailAndPassword(auth, "abc@mail.com", "qwerty")
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
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

    return (
        <>
            <ThemeProvider theme={theme}>
                <AuthenticationContextProvider>
                    <FavouritesContextProvider>
                        <LocationContextProvider>
                            <RestaurantsContextProvider>
                                <Navigation />
                            </RestaurantsContextProvider>
                        </LocationContextProvider>
                    </FavouritesContextProvider>
                </AuthenticationContextProvider>
            </ThemeProvider>
            <ExpoStatusBar style="auto" />
        </>
    );
}
