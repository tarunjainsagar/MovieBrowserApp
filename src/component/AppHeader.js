import React from 'react';
import { Appbar } from 'react-native-paper';
import { Image } from 'react-native';

const AppHeader = () => {
    return (
        <Appbar.Header>
            <Image
                source={require('../../resources/images/app_logo.png')}
                style={{ width: 80, height: 40 }}
            />
        </Appbar.Header>
    );
};

export default AppHeader;
