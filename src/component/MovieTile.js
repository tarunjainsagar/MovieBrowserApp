import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

function MovieTile({ movie, onPress }) {
  // Create variables for styling and image URI
  const posterUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <TouchableOpacity onPress={() => onPress(movie)}>
      <View style={styles.container}>
        <Image source={{ uri: posterUri }} style={styles.image} resizeMode="cover" />
        <View style={styles.detailsContainer}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.info}>Release Date: {movie.release_date}</Text>
            <Text style={styles.info}>Average Rating: {movie.vote_average}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 16, // 50% of the screen width, accounting for margin
    aspectRatio: 2 / 3, // 2:3 aspect ratio
    marginHorizontal: 8, // Adjust spacing as needed
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative', // For positioning the overlay
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Gray color with 50% opacity
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#FFF', // Text color on the gray background
  },
  info: {
    fontSize: 14,
    marginBottom: 2,
    color: '#FFF', // Text color on the gray background
  },
});

export default MovieTile;
