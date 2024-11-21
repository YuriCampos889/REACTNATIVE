import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { useFonts, Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_300Light, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [fontsLoaded] = useFonts({
    Montserrat_800ExtraBold, Montserrat_700Bold, Montserrat_300Light, Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeIcon}>
          <Text style={styles.closeIconText}>✕</Text>
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://i.ibb.co/ZSr8Vtm/Imagem-do-Whats-App-de-2024-11-11-s-11-17-53-21f92382.jpg' }}
            style={styles.avatar}
          />
          <View style={styles.userDetails}>
            <Text style={styles.username}>[UPD] Galinha 🐓</Text>
            <Text style={styles.userTag}>Firemalte07</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIcon}>
          <Image
            source={{ uri: 'https://i.ibb.co/wKwGWn0/Imagem-do-Whats-App-de-2024-11-11-s-11-20-54-bc60dbf2.jpg' }}
            style={styles.notificationIcon}
          />
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: 'https://i.ibb.co/cy26QXG/Imagem-do-Whats-App-de-2024-11-11-s-11-17-18-765c8042.jpg' }}
        style={styles.mainImage}
      />

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Classificação</Text>
          <Text style={styles.statValue}>90%</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Ativo</Text>
          <Text style={styles.statValue}>1,9 mil</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statLabel}>Visitas</Text>
          <Text style={styles.statValue}>18,9 mi</Text>
        </View>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionTitle}>Descrição</Text>
        <Text style={styles.descriptionText} numberOfLines={isExpanded ? undefined : 3}>
          Roube o ovo das galinhas e corra! Ganhe pontos por quanto tempo você sobrevive sem ser pego. {"\n\n"} 
          ATUALIZACAO {"\n"} 
          As galinhas Douradas podem aparecer aleatoriamente! Elas dão 5X mais pontos que as galinhas normais! {"\n\n"} 
          Dê um like ao jogo para mostrar seu apoio! {"\n"} 
          Certifique-se de marcar o jogo como favorito para não perder nenhuma atualizacao
        </Text>
        
        <TouchableOpacity onPress={toggleExpand} style={styles.iconButton1}>
          <Image
            source={{
              uri: isExpanded
                ? 'https://i.ibb.co/whw7F12/Imagem-do-Whats-App-de-2024-11-11-s-20-44-01-a6a98ba5.jpg'
                : 'https://i.ibb.co/BtxvSPq/Imagem-do-Whats-App-de-2024-11-11-s-20-44-15-d7b54749.jpg'
            }}
            style={styles.iconImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.rating}>
        <View style={styles.ratingInfo}>
          <Image
            source={{ uri: 'https://i.ibb.co/XpXSPCX/Imagem-do-Whats-App-de-2024-11-11-s-11-20-23-f7d9795f.jpg' }}
            style={styles.ratingIcon}
          />
          <Text style={styles.ratingValue}>90%</Text>
          <Text style={styles.ratingVotes}>36,7 MIL VOTOS</Text>
        </View>
        <View style={styles.ratingButtons}>
          <TouchableOpacity style={styles.downvoteButton}>
            <Image
              source={{ uri: 'https://i.ibb.co/ZK0FLJ2/Imagem-do-Whats-App-de-2024-11-11-s-11-19-14-7d66656b.jpg' }}
              style={styles.voteIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.upvoteButton}>
            <Image
              source={{ uri: 'https://i.ibb.co/XzH9ZVh/Imagem-do-Whats-App-de-2024-11-11-s-11-44-08-51fa8279.jpg' }}
              style={styles.voteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.actions}>
        <View style={styles.titleRow}>
          <Text style={styles.actionText}>Assinaturas e passes</Text>
          <TouchableOpacity style={styles.playButton}>
            <Image
              source={{ uri: 'https://i.ibb.co/6HxyN7f/Imagem-do-Whats-App-de-2024-11-11-s-11-56-04-46f541ac.jpg' }}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={{ uri: 'https://i.ibb.co/SwdJ8v7/Imagem-do-Whats-App-de-2024-11-11-s-11-21-25-e06b3d9d.jpg' }}
                style={styles.optionIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={{ uri: 'https://i.ibb.co/WW1DMMD/Imagem-do-Whats-App-de-2024-11-11-s-11-21-45-7165ce76.jpg' }}
                style={styles.visitIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                source={{ uri: 'https://i.ibb.co/R2Mpdy6/Imagem-do-Whats-App-de-2024-11-11-s-11-18-33-3a3654dc.jpg' }}
                style={styles.playIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
