import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  SafeAreaViewBase,
  Alert,
} from 'react-native';

const SENAI_RED = '#d52b1e';
const SENAI_DARK_GRAY = '#333333';
const SENAI_MEDIUM_GRAY = '#888888';
const SENAI_LIGHT_GRAY = '#f2f2f2';
const WHITE = '#ffffff';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha email e senha');
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          placeholder="seu.email@email.com"
          placeholderTextColor={SENAI_MEDIUM_GRAY}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="******"
          placeholderTextColor={SENAI_MEDIUM_GRAY}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SENAI_DARK_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#444444',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  title: {
    color: WHITE,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    color: SENAI_LIGHT_GRAY,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },

  label: {
    color: SENAI_LIGHT_GRAY,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },

  input: {
    backgroundColor: SENAI_DARK_GRAY,
    color: WHITE,
    fontSize: 16,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: SENAI_MEDIUM_GRAY,
  },

  forgotPassword: {
    color: SENAI_RED,
    fontSize: 14,
    textAlign: 'right',
    marginBottom: 24,
  },

  loginButton: {
    backgroundColor: SENAI_RED,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: '100%',
    height: 50,
  },

  loginButtonText: {
    color: WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});