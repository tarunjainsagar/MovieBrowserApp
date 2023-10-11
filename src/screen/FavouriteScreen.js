import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { fetchFavoriteMovies } from '@api/TheMovieDatabase';
import MovieTile from '@component/MovieTile';

function FavouriteScreen() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        fetchData();
    }, [page]);

    const fetchData = async () => {
        if (isFetching) {
            return; // Prevent multiple simultaneous requests
        }

        setIsFetching(true);
        try {
            const data = await fetchFavoriteMovies(page);
            if (data.length > 0) {
                // Add a timestamp for uniqueness
                const moviesWithTimestamp = data.map((item) => ({
                    ...item,
                    timestamp: Date.now(), // Use a timestamp for uniqueness
                }));
                setMovies((prevMovies) => [...prevMovies, ...moviesWithTimestamp]);
                setPage(page + 1);
            }
        } catch (error) {
            console.error('Error fetching favorite movies:', error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleEndReached = () => {
        // Fetch more data when you reach the end of the list
        fetchData();
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={movies}
                keyExtractor={(item) => `${item.id}_${item.timestamp}`} // Use a combination of ID and timestamp for the key
                numColumns={2}
                renderItem={({ item }) => <MovieTile movie={item} />}
                onEndReached={handleEndReached}
                onEndReachedThreshold={0.5}
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
