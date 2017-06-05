import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const dimension = width / 2 - 15;

export default StyleSheet.create({
    album: {
        width: dimension,
        backgroundColor: '#555555',
        marginBottom: 10,
        marginLeft: 10,
        elevation: 5
    },
    image: {
        width: dimension,
        height: dimension
    },
    albumInfo: {
        flex: 1,
        padding: 10,
    },
    name: { color: '#fff', fontSize: 16 },
    artist: { color: '#fff', fontSize: 12 }
});