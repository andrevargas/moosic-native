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
        padding: 8,
    },
    name: {
        color: '#ffffff',
        fontSize: 16,
        fontFamily: 'Lato'
    },
    artist: {
        color: '#ffffff',
        fontSize: 12,
        fontFamily: 'Lato',
        marginTop: 5
    }
});