import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useUserContext } from '../context/UserContext';
import { Ionicons } from '@expo/vector-icons';
import { Snackbar } from 'react-native-paper';

const ProfileScreen = () => {
    const { userContext } = useUserContext();
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const showSnackbar = () => {
        setSnackbarVisible(true);
        setTimeout(() => {
            setSnackbarVisible(false);
        }, 2000);
    };

    // Assuming userContext.session_id contains the user's session ID
    const userId = userContext ? userContext.session_id : '';

    return (
        <View style={styles.container}>
            <View style={styles.profilePictureContainer}>
                <View style={styles.iconContainer}>
                    <Ionicons name="person" color="black" size={150} style={styles.icon} />
                </View>
            </View>
            <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>Guest User</Text>
                <Text style={styles.userId}>User ID: {userId}</Text>
                <View style={{ margin: 10 }}>
                    <Button
                        title="Create TMDB Account"
                        onPress={showSnackbar}
                    />
                </View>
            </View>
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000}
            >
                This feature is coming soon...
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profilePictureContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    iconContainer: {
        width: 200,
        height: 250,
        backgroundColor: 'white', // Background color for the square
        borderRadius: 10, // Adjust as needed to create the desired border
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    icon: {
        color: 'black', // Color of the icon
    },
    userInfoContainer: {
        flex: 1,
        alignItems: 'center',
    },
    userName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userId: {
        fontSize: 16,
    },
    createAccountButton: {
        marginTop: 20, // Adjust the value as needed
    },
});

export default ProfileScreen;
