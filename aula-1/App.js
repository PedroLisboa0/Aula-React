import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Pedro Lisboa",
    bio: "Ciência da Computação, Segundo ano.",
    frase: "Corinthiano, maloqueiro e sofredor.",
    links: "Linkedin    |     GitHub",
    avatar: "https://s2-ge.glbimg.com/fyEsqw06ukzYTRXjCiNVVuPVl6c=/0x0:4429x2953/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/j/v/quwuZLTgKQJYAfIppO0Q/rib0368-2.jpg",
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/*Frase*/}
      <Text style={styles.frase}>{usuario.frase}</Text>
      {/* Stats */}
      <View style={styles.links}>
        <Text style={styles.link_text}> {usuario.links}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: '#E1306C',
    marginBottom: 16,
  },
  nome: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    fontSize: 20,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  frase: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },

  links: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 25,
  },
  link_text: {
    color: '#fff',
    fontSize: 18,
  },
});