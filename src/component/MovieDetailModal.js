import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

function MovieDetailModal({ movie, onClose }) {
    const posterUri = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const showSnackbar = () => {
        setSnackbarVisible(true);
        setTimeout(() => {
            setSnackbarVisible(false);
        }, 2000);
    };

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
        >
            <View style={styles.container}>
                <View style={styles.detailsContainer}>
                    <View style={styles.posterContainer}>
                        <Image source={{ uri: posterUri }} style={styles.posterImage} resizeMode="cover" />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{movie.title}</Text>
                        <Text style={styles.info}>Release Date: {movie.release_date}</Text>
                        <Text style={styles.info}>Average Rating: {movie.vote_average}</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity style={styles.icon}>
                                <Ionicons name="heart" color={"white"} size={40} />
                                <Text style={styles.iconText}>Favourite</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={showSnackbar}
                            >
                                <Ionicons name="add" color={"white"} size={40} />
                                <Text style={styles.iconText}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.icon}
                                onPress={showSnackbar}
                            >
                                <Ionicons name="share" color={"white"} size={40} />
                                <Text style={styles.iconText}>Share</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.blankSpace} />
                        <Text style={styles.overview}>{movie.overview}</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.backButton} onPress={onClose}>
                    <Ionicons name="arrow-back" color={"white"} size={30} />
                </TouchableOpacity>
                <Snackbar
                    visible={snackbarVisible}
                    onDismiss={() => setSnackbarVisible(false)}
                    duration={2000}
                >
                    This feature is coming soon...
                </Snackbar>
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
        flex: 0.5,
    },
    detailsContainer: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'center',
    },
    posterContainer: {
        marginTop: 60,
        marginBottom: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    posterImage: {
        width: 250,
        height: 325,
    },
    details: {
        paddingHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 60,
        marginBottom: 4,
        color: '#FFF',
        textAlign: 'center',
    },
    info: {
        fontSize: 18,
        marginBottom: 8,
        color: '#FFF',
        textAlign: 'center',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 12,
    },
    icon: {
        // todo: later
    },
    iconText: {
        color: '#FFF',
        textAlign: 'center',
    },
    blankSpace: {
        marginBottom: 20,
    },
    overviewTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFF',
    },
    overview: {
        fontSize: 16,
        color: '#FFF',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
});

export default MovieDetailModal;
