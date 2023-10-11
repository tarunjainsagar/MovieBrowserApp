import React, { useState } from 'react';
import { View } from 'react-native';
import { Chip } from '@rneui/themed';
import MovieListScreen from '@screen/MovieListScreen';

const HomeScreen = () => {
    const tabs = {
        nowplaying: 'Now Playing',
        toprated: 'Top Rated',
        popular: 'Popular',
        upcoming: 'Upcoming',
    };

    const [selectedTab, setSelectedTab] = useState('nowplaying');

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
                {Object.keys(tabs).map((tabKey) => (
                    <Chip
                        key={tabKey}
                        selected={selectedTab === tabKey}
                        onPress={() => setSelectedTab(tabKey)}
                        type={selectedTab === tabKey ? 'solid' : 'outline'}
                    >
                        {tabs[tabKey]}
                    </Chip>
                ))}
            </View>
            <MovieListScreen listType={selectedTab} />
        </View>
    );
};

export default HomeScreen;
