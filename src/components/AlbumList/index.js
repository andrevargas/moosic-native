import React from 'react';
import { View, FlatList } from 'react-native';
import Album from '../Album';
import Loading from '../Loading';
import styles from './styles';

const renderItem = ({ item }) => <Album album={item} />;
const keyExtractor = item => item.mbid;

const AlbumList = ({ albums, isFetching }) => (
    <View>
        {(albums.length > 0 && !isFetching) &&
            <FlatList
                data={albums}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.list} />}
        <Loading visible={isFetching} />
    </View>
);

export default AlbumList;