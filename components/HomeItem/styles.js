import { StyleSheet } from 'react-native';

//declaring styles using StyleSheet.create
const styles = StyleSheet.create({

  homeContainer: {
    width: '100%',
    height: '100%',
  },

  titles: {
    marginTop: '35%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 35,
    fontWeight: '400',
  },

  subtitle: {
    fontSize: 20,
    color: 'grey',
  },

  image: {
    width: 450,
    height: 370,
    //resize mode indicates how pic will resize if does not fit on whole screen
    resizeMode: 'cover',
    // position: absolute, so it doesnt push our component underneath
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
  }


});

export default styles;