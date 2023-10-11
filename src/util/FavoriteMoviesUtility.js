import AsyncStorage from '@react-native-async-storage/async-storage';

export const updateFavoriteMovies = async (session_id, movieList) => {
    try {
        await AsyncStorage.setItem(`favoriteMovies_${session_id}`, JSON.stringify(movieList));
    } catch (error) {
        throw error;
    }
};

export const getFavoriteMovies = async (session_id) => {
    try {
        const storedMovies = await AsyncStorage.getItem(`favoriteMovies_${session_id}`);
        return storedMovies ? JSON.parse(storedMovies) : [];
    } catch (error) {
        throw error;
    }
};
