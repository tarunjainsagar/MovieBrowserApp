import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Modal, StyleSheet } from 'react-native';

function MovieDetailModal({ movie, onClose }) {
    const posterUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
        >
            <View style={styles.container}>
                <Image source={{ uri: posterUri }} style={styles.image} resizeMode="cover" />

                <ScrollView style={styles.detailsContainer}>
                    <View style={styles.overlay}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.info}>Release Date: {movie.release_date}</Text>
                        <Text style={styles.info}>Average Rating: {movie.vote_average}</Text>
                        <Text style={styles.info}>Overview: {movie.overview}</Text>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.backButton} onPress={onClose}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    backButtonText: {
        color: 'red',
        fontSize: 16,
    },
});

export default MovieDetailModal;
