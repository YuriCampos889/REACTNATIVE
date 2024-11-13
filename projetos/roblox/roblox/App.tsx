import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

import styles from './styles1';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold, Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  const friends = [
    { id: '1', name: 'Adicionar\namizades', image: 'https://i.ibb.co/0n3JCd3/Imagem-do-Whats-App-de-2024-11-09-s-17-08-57-cbe8f85f.jpg' },
    { id: '2', name: 'Tikpokc', image: 'https://i.ibb.co/C0J0ByZ/image.png' },
    { id: '3', name: '🟢 R0oster', image: 'https://i.ibb.co/YcPLQV0/Imagem-do-Whats-App-de-2024-11-10-s-17-06-39-9a5d3f53.jpg' },

  ];

  const recommendations = [
    { id: '1', name: 'Dress To Impress', rating: '91%', image: 'https://i.ibb.co/Jz1X5mK/Imagem-do-Whats-App-de-2024-11-09-s-17-19-53-f5061c7d.jpg' },
    { id: '2', name: 'Galinha', rating: '90%', image: 'https://i.ibb.co/9tkTWqg/Imagem-do-Whats-App-de-2024-11-09-s-19-42-04-98fab120.jpg' },
  ];

  const peopleYouMayKnow = [
    { id: '1', name: 'nICOliTe739', image: 'https://i.ibb.co/jwZ0m7R/Imagem-do-Whats-App-de-2024-11-09-s-19-47-11-53d99ea1.jpg' },
    { id: '2', name: 'Speket045', image: 'https://i.ibb.co/Pr9hxk2/Imagem-do-Whats-App-de-2024-11-09-s-19-47-34-056dc288.jpg' },
    { id: '3', name: 'Kadu_Korinthians', image: 'https://i.ibb.co/J3YPfGt/Imagem-do-Whats-App-de-2024-11-09-s-19-48-01-0fdb259d.jpg' },
  ];

  const continuePlaying = [
    { id: '1', name: 'Seja um\nBuraco', image: 'https://i.ibb.co/gSqqxYG/Imagem-do-Whats-App-de-2024-11-09-s-19-33-40-57fa5576.jpg', rating: '72%', visits: '6.2mil' },
    { id: '2', name: 'Porco \nFaminto', image: 'https://i.ibb.co/SKxvLyK/Imagem-do-Whats-App-de-2024-11-09-s-19-35-15-13f24152.jpg', rating: '85%', visits: '4.1mil' },
    { id: '3', name: 'Último a Sair', image: 'https://i.ibb.co/8gLbk5c/Imagem-do-Whats-App-de-2024-11-09-s-20-20-46-32490463.jpg', rating: '91%', visits: '7.5mil' },
  ];

  const sponsored = [
    { id: '1', name: 'Total\nDrama Robl..', image: 'https://i.ibb.co/qyn4QRV/Imagem-do-Whats-App-de-2024-11-10-s-16-31-44-c573362c.jpg', rating: '72%', visits: '6.2mil' },
    { id: '2', name: 'Passe\na Bomba', image: 'https://i.ibb.co/hcDSnd4/Imagem-do-Whats-App-de-2024-11-10-s-16-31-44-bfb8a0d6.jpg', rating: '85%', visits: '4.1mil' },
    { id: '3', name: 'Clothes\n& Style Ho...', image: 'https://i.ibb.co/YjFg50f/Imagem-do-Whats-App-de-2024-11-10-s-16-31-44-14d5f48a.jpg', rating: '91%', visits: '7.5mil' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <MaterialIcons name="search" size={24} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.profileContainer}>
          <Image style={styles.profileImage} source={{ uri: 'https://i.ibb.co/xFPkRbV/Imagem-do-Whats-App-de-2024-11-09-s-20-25-48-2053d2bc.jpg' }} />
          <Text style={styles.profileName}>Siri que canta</Text>
        </View>

        <View style={styles.voiceChatContainer}>
  <View style={styles.iconContainer}>
    <Image 
      source={{ uri: 'https://i.ibb.co/318PkTc/image.png' }}
      style={styles.icon}
    />
    <Text style={styles.voiceChatText}>Desbloquear o Bate-papo de voz</Text>
  </View>
  <Text style={styles.voiceChatSubText}>Adicione um número de telefone para ativar{"\n"}o Bate-papo de voz.</Text>
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>Adicionar número de telefone</Text>
  </TouchableOpacity>
</View>


        <Text style={styles.sectionTitle}>Amizades (1)</Text>
        <FlatList
          horizontal
          data={friends}
          renderItem={({ item }) => (
            <View style={styles.friendContainer}>
              <Image style={styles.friendImage} source={{ uri: item.image }} />
              <Text style={styles.friendName}>{item.name}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />

<Text style={styles.sectionTitle}>Recomendações para você</Text>
<FlatList
  horizontal
  data={recommendations}
  renderItem={({ item }) => (
    <View style={styles.recommendationContainer}>
      <Image style={styles.recommendationImage} source={{ uri: item.image }} />
      <Text style={styles.recommendationName}>{item.name}</Text>
      <View style={styles.ratingContainer}>
        <Image 
          style={styles.ratingIcon} 
          source={{ uri: 'https://i.ibb.co/kKBdR4F/Imagem-do-Whats-App-de-2024-11-10-s-17-22-40-e396ee70.jpg' }} 
        />
        <Text style={styles.recommendationRating}>Avaliação {item.rating}</Text>
      </View>
    </View>
  )}


          keyExtractor={(item) => item.id}
        />

        <Text style={styles.sectionTitle}>Pessoas que você pode conhecer ({peopleYouMayKnow.length})</Text>
        <FlatList
  horizontal
  data={peopleYouMayKnow}
  renderItem={({ item }) => (
    <View style={styles.personContainer}>
      <Image style={styles.personImage} source={{ uri: item.image }} />
      <View style={styles.personInfoContainer}>
        <Text style={styles.personName}>{item.name}</Text>

        <View style={styles.personDetailsContainer}>
          <Text style={styles.personCommonFriend}>
            <Image 
              style={styles.personIcon} 
              source={{ uri: 'https://i.ibb.co/MsQwzdR/Imagem-do-Whats-App-de-2024-11-10-s-17-36-25-47019137.jpg' }} 
            />
            1 amizade em{"\n"}comum
          </Text>
        </View>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

<Text style={styles.sectionTitle}>Continuar </Text>
<FlatList
  horizontal
  data={continuePlaying}
  renderItem={({ item }) => (
    <View style={styles.continueContainer}>
      <Image style={styles.continueImage} source={{ uri: item.image }} />
      <Text style={styles.continueName}>{item.name}</Text>

      <View style={styles.continueStatsContainer}>
        <View style={styles.continueStat}>
          <Image 
            style={styles.continueStatIcon} 
            source={{ uri: 'https://i.ibb.co/kKBdR4F/Imagem-do-Whats-App-de-2024-11-10-s-17-22-40-e396ee70.jpg' }} // URL do ícone de avaliação
          />
          <Text style={styles.continueStatText}>{item.rating}</Text>
        </View>

        <View style={styles.continueStat}>
          <Image 
            style={styles.continueStatIcon} 
            source={{ uri: 'https://i.ibb.co/hyYvtKh/image.png' }}
          />
          <Text style={styles.continueStatText}>{item.visits}</Text>
        </View>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

<Text style={styles.sectionTitle}>Patrocinadas</Text>
<FlatList
  horizontal
  data={sponsored}
  renderItem={({ item }) => (
    <View style={styles.sponsoredContainer}>
      <Image style={styles.sponsoredImage} source={{ uri: item.image }} />
      <Text style={styles.sponsoredName}>{item.name}</Text>

      <View style={styles.sponsoredStatsContainer}>
        <View style={styles.sponsoredStat}>
          <Image 
            style={styles.sponsoredStatIcon} 
            source={{ uri: 'https://i.ibb.co/kKBdR4F/Imagem-do-Whats-App-de-2024-11-10-s-17-22-40-e396ee70.jpg' }} // URL do ícone de avaliação
          />
          <Text style={styles.sponsoredStatText}>{item.rating}</Text>
        </View>

        <View style={styles.sponsoredStat}>
          <Image 
            style={styles.sponsoredStatIcon} 
            source={{ uri: 'https://i.ibb.co/MsQwzdR/icone-visitas.png' }}
          />
          <Text style={styles.sponsoredStatText}>{item.visits}</Text>
        </View>
      </View>
    </View>
  )}
  keyExtractor={(item) => item.id}
/>

      </ScrollView>

<View style={styles.navigationBar}>
  <TouchableOpacity style={styles.navItem}>
    <Image 
      style={styles.navIcon} 
      source={{ uri: 'https://i.ibb.co/JHz4hyq/Imagem-do-Whats-App-de-2024-11-10-s-23-07-04-86e0aff2.jpg' }} 
    />
    <Text style={styles.navText}>Início</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.navItem}>
    <Image 
      style={styles.navIcon} 
      source={{ uri: 'https://i.ibb.co/P4MYZt8/Imagem-do-Whats-App-de-2024-11-10-s-23-09-45-a55b9c5b.jpg' }} 
    />
    <Text style={styles.navText}>Destaques</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.navItem}>
    <Image 
      style={styles.navIcon} 
      source={{ uri: 'https://i.ibb.co/Pct978n/Imagem-do-Whats-App-de-2024-11-10-s-23-15-23-e552fa11.jpg' }} 
    />
    <Text style={styles.navText}>Avatar</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.navItem}>
    <Image 
      style={styles.navIcon} 
      source={{ uri: 'https://i.ibb.co/zJdLGdT/Imagem-do-Whats-App-de-2024-11-10-s-23-10-37-35bdfcd1.jpg' }} 
    />
    <Text style={styles.navText}>Chat</Text>
  </TouchableOpacity>
  
  <TouchableOpacity style={styles.navItem}>
    <Image 
      style={styles.navIcon} 
      source={{ uri: 'https://i.ibb.co/jrZsSX3/Imagem-do-Whats-App-de-2024-11-10-s-23-10-54-f77b49b8.jpg' }} 
    />
    <Text style={styles.navText}>Mais</Text>
  </TouchableOpacity>
</View>


    </View>
  );
}
