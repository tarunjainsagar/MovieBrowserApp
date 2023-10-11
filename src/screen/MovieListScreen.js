import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '@api/TheMovieDatabase.js';
import MovieTile from '@component/MovieTile.js';

function MovieListScreen({ listType }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const fetchFunction = (page) => {
    switch (listType) {
      case 'nowplaying':
        return fetchNowPlayingMovies(page);
      case 'popular':
        return fetchPopularMovies(page);
      case 'toprated':
        return fetchTopRatedMovies(page);
      case 'upcoming':
        return fetchUpcomingMovies(page);
      default:
        return fetchNowPlayingMovies(page);
    }
  };

  useEffect(() => {
    setMovies([]); // Reset movies when listType changes
    setPage(1);
    fetchData();
  }, [listType]);

  const fetchData = async () => {
    if (isFetching) {
      return; // Prevent multiple simultaneous requests
    }

    setIsFetching(true);
    try {
      const data = await fetchFunction(page);
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
      console.error(`Error fetching ${listType} movies:`, error);
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

export default MovieListScreen;
