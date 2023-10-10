import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '80%',
    bottom: 10,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    marginTop: 20,
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
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#ECECEC',
    borderRadius: 80,
    height: 50,
    alignItems: 'center',
  },
  passwordView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '85%',
    borderRadius: 80,
    height: 60,
    backgroundColor: '#ECECEC',
    margin: 20,
    paddingLeft: 10,
    opacity: '70%',
  },
  icon: {
    width: '10%',
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonAcess: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'Roboto_400Regular',
  },
  buttonAcess: {
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
  buttonSenha: {
    width: '70%',
    opacity: '100%',
    fontSize: 12,
    alignItems: 'center',
    color: 'blue',
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
