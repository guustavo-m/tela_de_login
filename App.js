import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Alert, SafeAreaViewBase,} from 'react-native';

const SENAI_RED = '#d52b1e'
const SENAI_DARK_GRAY = '#333333'
const SENAI_MEDIUM_GRAY = '#888888'
const SENAI_LIGHT_GRAY = '#f2f2f2'
const WHITE = '#ffffff'

export default function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function handleLogin() {

    if(!email || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha email e senha')
    } else {
      Alert.alert('Sucesso', 'Login realizado com sucesso')
    }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Acesse sua conta</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
        style={styles.input}
        placeholder='seu.email@email.com'
        placeholderTextColor={SENAI_MEDIUM_GRAY}
        keyboardType='email-address'
        autoCapitalize='none'
        value={email}
        onChangeText={setEmail}
        />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput
        style={styles.input}
        placeholder='******'
        placeholderTextColor={SENAI_MEDIUM_GRAY}
        secureTextEntry //oculta a senha
        value={senha}
        onChangeText={setSenha}
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
}