import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import AlbumList from '../components/AlbumList';
import { fetchAlbums } from '../redux/ducks/albums';

class Main extends Component {
    componentDidMount() {
        this.props.fetchAlbums();
    }
    render() {
        return (
            <View>
                <AlbumList
                    albums={this.props.albums}
                    isFetching={this.props.isFetching}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isFetching: state.albums.isFetching,
    albums: state.albums.items
});

const mapDispatchToProps = dispatch => ({
    fetchAlbums: () => dispatch(fetchAlbums())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
