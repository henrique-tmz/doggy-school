import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    bottom: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 15,
    borderRadius: 50,
  },
  form: {
    width: '100%',
    marginTop: 30,
    padding: 30,
  },
  formLabel: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
  },
  input: {
    width: '90%',
    borderRadius: 80,
    height: 50,
    backgroundColor: '#ECECEC',
    margin: 15,
    paddingLeft: 10,
    opacity: '70%',
  },
  textButtonCadas: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Roboto_400Regular',
  },
  buttonCadas: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: '#2A9C69',
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 30,
    marginBottom: 70,
  },
  buttonConta: {
    opacity: '50%',
    borderTopWidth: 1,
    fontSize: 12,
    alignItems: 'center',
    margin: 10,
  },
});

export default styles;
