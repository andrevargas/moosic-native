import React from 'react';
import { Image } from 'react-native';
import FadeView from '../FadeView';
import RotateView from '../RotateView';
import styles from './styles';

const Loading = () => (
    <FadeView>
        <RotateView style={styles.view} infinite>
            <Image
                source={require('../../../assets/images/logo.png')}
                style={styles.image}
            />
        </RotateView>
    </FadeView>
);

export default Loading;
