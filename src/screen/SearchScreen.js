import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { searchMovies } from '@api/TheMovieDatabase';
import MovieTile from '@component/MovieTile.js';

function SearchScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (query) => {
        // Set isLoading to true while waiting for the API response
        setIsLoading(true);

        try {
            const results = await searchMovies(query);
            setSearchResults(results);
        } catch (error) {
            console.error('Error searching for movies:', error);
        } finally {
            // Set isLoading to false when the API response is received
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (searchQuery) {
            handleSearch(searchQuery);
        } else {
            setSearchResults([])
        }
    }, [searchQuery]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for movies"
                value={searchQuery}
                onChangeText={(text) => setSearchQuery(text)}
            />

            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2} // Display movies in 2 columns
                    renderItem={({ item }) => (
                        <MovieTile movie={item} />
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingLeft: 8,
    },
});

export default SearchScreen;
