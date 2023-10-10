// MovieListScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies } from '@api/TheMovieDatabase.js';

function MovieListScreen({ listType }) {
  const [movies, setMovies] = useState([]);
  const [typename, setTypename] = useState('Now Playing');

  useEffect(() => {
    let fetchFunction;

    // Determine the appropriate fetch function based on the listType parameter
    switch (listType) {
      case 'nowplaying':
        fetchFunction = fetchNowPlayingMovies;
        setTypename('Now Playing');
        break;
      case 'popular':
        fetchFunction = fetchPopularMovies;
        setTypename('Popular');
        break;
      case 'toprated':
        fetchFunction = fetchTopRatedMovies;
        setTypename('Top Rated');
        break;
      case 'upcoming':
        fetchFunction = fetchUpcomingMovies;
        setTypename('Upcoming');
        break;
      default:
        fetchFunction = fetchNowPlayingMovies; // Default to Now Playing if listType is not recognized
    }

    // Fetch the movie data based on the selected list type
    fetchFunction()
      .then((data) => setMovies(data))
      .catch((error) => console.error(`Error fetching ${listType} movies:`, error));
  }, [listType]);

  return (
    <View>
      <Text>{typename} Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Release Date: {item.release_date}</Text>
            <Text>Average Rating: {item.vote_average}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default MovieListScreen;