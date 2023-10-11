import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import MovieDetailModal from '@component/MovieDetailModal';

const windowWidth = Dimensions.get('window').width;

function MovieTile({ movie, onPress }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handlePress = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  }

  const posterUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
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

      {isModalVisible && (
        <MovieDetailModal
          movie={movie}
          onClose={closeModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 2 - 16,
    aspectRatio: 2 / 3,
    marginHorizontal: 8,
    marginBottom: 16,
    overflow: 'hidden',
    position: 'relative',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#FFF',
  },
  info: {
    fontSize: 14,
    marginBottom: 2,
    color: '#FFF',
  },
});

export default MovieTile;
