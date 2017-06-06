import React from 'react';
import { View, Text, Image } from 'react-native';
import FadeView from '../FadeView';
import styles from './styles';

const Album = ({ album }) => (
    <FadeView style={styles.album}>
        <Image source={{ uri: album.image[2]['#text'] }} style={styles.image} />
        <View style={styles.albumInfo}>
            <Text style={styles.name}>{album.name}</Text>
            <Text style={styles.artist}>{album.artist.name}</Text>
        </View>
    </FadeView>
);

export default Album;
