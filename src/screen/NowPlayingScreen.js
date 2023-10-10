import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNowPlayingMovies } from '@api/TheMovieDatabase.js';

function NowPlayingScreen() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchNowPlayingMovies()
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching now playing movies:', error));
  }, []);

  return (
    <View>
      <Text>Now Playing Movies</Text>
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

export default NowPlayingScreen;
