import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const HomeItem = (props) => {

  const { name, address, rentalStats, rentalRate, image } = props;

  return (
    <View>
      <View style={styles.homeContainer}>
        {/* render background image */}
        <ImageBackground 
          source={image}
          style={styles.image}
        />

        {/* render titles and subtitles */}
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{address}</Text>
          <Text style={styles.subtitle}>{rentalStats}</Text>
          <Text style={styles.subtitle}>{rentalRate}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <StyledButton 
          type='primary' 
          content={'Get More Info'}
          onPress={() => {
            console.warn("Get More Info was pressed");
          }}
          />
          
          {/* onPress is passed as a prop to StyledButton component for dynamic insert of function */}
          <StyledButton 
          type='secondary' 
          content={'Not interested'}
          onPress={() => {
            console.warn("Not interested was pressed");
          }}
          />
        </View>

      </View>
    </View>
  );
};

export default HomeItem;