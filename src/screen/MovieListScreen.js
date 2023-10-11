import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '@api/TheMovieDatabase.js';
import MovieTile from '@component/MovieTile.js';

function MovieListScreen({ listType }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let fetchFunction;
    // Determine the appropriate fetch function based on the listType parameter
    switch (listType) {
      case 'nowplaying':
        fetchFunction = fetchNowPlayingMovies;
        break;
      case 'popular':
        fetchFunction = fetchPopularMovies;
        break;
      case 'toprated':
        fetchFunction = fetchTopRatedMovies;
        break;
      case 'upcoming':
        fetchFunction = fetchUpcomingMovies;
        break;
      default:
        fetchFunction = fetchNowPlayingMovies; // Default to Now Playing if listType is not recognized
    }

    // Fetch the movie data based on the selected list type
    fetchFunction()
      .then((data) => {
        setMovies(data);
      })
      .catch((error) => console.error(`Error fetching ${listType} movies:`, error));
  }, [listType]);

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display movies in 2 columns
        renderItem={({ item }) => (
          <MovieTile movie={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieListScreen;
