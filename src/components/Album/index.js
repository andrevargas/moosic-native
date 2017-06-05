import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Album = ({ album }) => (
    <View style={styles.album}>
        <Image source={{ uri: album.image[3]['#text'] }} style={styles.image} />
        <View style={styles.albumInfo}>
            <Text style={styles.name}>{album.name}</Text>
            <Text style={styles.artist}>{album.artist.name}</Text>
        </View>
    </View>
);

export default Album;