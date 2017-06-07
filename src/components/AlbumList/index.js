import React from 'react';
import { View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Album from '../Album';
import Loading from '../Loading';
import styles from './styles';

const renderItem = ({ item }) => <Album album={item} />;
const keyExtractor = item => item.url;

const AlbumList = ({ albums, isFetching }) => (
    <View>
        {albums.length > 0 &&
            <FlatList
                data={albums}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.list} />}
        {isFetching && <Loading />}
    </View>
);

AlbumList.propTypes = {
    albums: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    isFetching: PropTypes.bool
};

export default AlbumList;
