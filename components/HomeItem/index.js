import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './style';
import StyleButton from '../StyledButton';

const HomeItem = (props) => {
  return (
    <View>
      <View style={styles.homeContainer}>
        {/* render background image */}
        <ImageBackground source={require('../../assets/images/cherry.jpeg')}
        style={styles.image}
        />

        {/* render titles and subtitles */}
        <View style={styles.titles}>
          <Text style={styles.title}>12345 SW Main St</Text>
          <Text style={styles.subtitle}>3 bed, 2 bath, 1,500sqft</Text>
          <Text style={styles.subtitle}>$1,995/month</Text>
        </View>

        <StyleButton />
      </View>
    </View>
  );
};

export default HomeItem;