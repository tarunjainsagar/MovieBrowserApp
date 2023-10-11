import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MovieTile from '@component/MovieTile';
import { useUserContext } from '../context/UserContext';
import { getFavoriteMovies } from '@util/FavoriteMoviesUtility';

function FavouriteScreen() {
    const { userContext } = useUserContext();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!userContext || !userContext.session_id) {
                return;
            }

            try {
                const favoriteMovies = await getFavoriteMovies(userContext.session_id);
                console.log(favoriteMovies)
                setMovies(favoriteMovies);
            } catch (error) {
                console.error('Error fetching favorite movies:', error);
            }
        };

        fetchData();
    }, [userContext]);

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item) => `${item.id}_${item.timestamp}`} // Use a combination of ID and timestamp for the key
                numColumns={2}
                renderItem={({ item }) => <MovieTile movie={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FavouriteScreen;
