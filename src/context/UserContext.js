import React, { createContext, useContext, useState, useEffect } from 'react';
import { createGuestSession } from '@api/TheMovieDatabase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Snackbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [userContext, setUserContext] = useState(null);
    const [showSnackbar, setShowSnackbar] = useState(false);

    useEffect(() => {
        const fetchUserContext = async () => {
            try {
                // Check if the user context exists in AsyncStorage
                const savedUserContext = await AsyncStorage.getItem('userContext');
                if (savedUserContext) {
                    setUserContext(JSON.parse(savedUserContext));
                    setShowSnackbar(true);
                } else {
                    // Create a guest session
                    const guestSessionId = await createGuestSession();

                    const newUserContext = { session_id: guestSessionId };
                    setUserContext(newUserContext);

                    // Save the user context in AsyncStorage
                    await AsyncStorage.setItem('userContext', JSON.stringify(newUserContext));
                    setShowSnackbar(true);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUserContext();
    }, []);

    return (
        <UserContext.Provider value={{ userContext, setUserContext }}>
            <SafeAreaProvider>
                {children}

                <Snackbar
                    visible={showSnackbar}
                    onDismiss={() => setShowSnackbar(false)}
                    duration={5000} // Hide the Snackbar after 5 seconds
                >
                    {userContext ? `Logged in as ${userContext.session_id}` : 'Created guest user.'}
                </Snackbar>

            </SafeAreaProvider>
        </UserContext.Provider>


    );
};

export default UserProvider;
