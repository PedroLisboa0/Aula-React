import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imagem}>
        <Text style={styles.imagemTexto}>PL</Text>
      </View>
      <Text style={styles.titulo}>Pedro Lisboa</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Ver meu Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  imagem:     { backgroundColor: '#4544FF', padding: 16, borderRadius: 100, marginBottom: 100 },
  imagemTexto:    { color: '#fff', fontSize: 44, fontWeight: '600' }
});
