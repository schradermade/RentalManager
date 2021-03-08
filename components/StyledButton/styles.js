import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // render as full width. any width of browser, it will take that space
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
  }
});

export default styles;