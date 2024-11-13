import { Montserrat_400Regular, Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 17,
    backgroundColor: '#F3F5F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  closeIcon: {
    padding: 8,
    position: 'relative',
    bottom: 19,
  },
  closeIconText: {
    fontSize: 23,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    position: 'relative',
    bottom: -13,
    marginTop: 60,
    right: 71,
  },
  userDetails: {
    marginLeft: 8,
    borderRadius: 10,
    position: 'relative',
    bottom: -13,
    marginTop: 60,
    right: 59,
  },
  username: {
    fontSize: 18,
    fontFamily: 'Montserrat_800ExtraBold',
    color: '#515355',
  },
  userTag: {
    fontSize: 14,
    color: '#888',
  },
  notificationIcon: {
    padding: 11,
    position: 'relative',
    top: 18,
  },

  mainImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginVertical: 16,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#F3F5F7',
    borderRadius: 12,
    marginVertical: -11,
  },
  statItem: {
    alignItems: 'center',
    
  },
  statLabel: {
    fontSize: 14,
    color: '#A5A7A9',
    fontFamily: 'Montserrat_700Bold',

  },
  statValue: {
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    color: '#4C4E50',
  },
  description: {
    backgroundColor: '#F3F5F7',
    borderRadius: 12,
    padding: 16,
    marginVertical: 7,
  },
  descriptionTitle: {
    fontSize: 19,
    fontFamily: 'Montserrat_800ExtraBold',
    marginBottom: 8,
    color: '#3C3E40',

  },
  descriptionText: {
    fontSize: 16,
    color: '#A3A5A6',
    fontFamily: 'Montserrat_400Regular',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#AAABAD',
    borderRadius: 12,
    padding: 8,
    marginVertical: -2,
  },
  ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AAABAD',
    padding: 3,
    borderRadius: 8,
  },

  ratingIcon: {
    width: 40,
    height: 40,
    marginRight: 8,
    resizeMode: 'contain',
  },
  ratingValue: {
    fontSize: 40,
    color: '#3A3C3D',
    fontWeight: 'bold',

  },
  ratingVotes: {
    fontSize: 12,
    color: '#727476',
  },
  ratingButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AAABAD',

  },

  upvoteButton: {
    padding: 5,
    marginRight: -5,
  },

  downvoteButton: {
    padding: 5,
  },

  voteIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
        titleRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20,
            position: 'relative',
            top: -14,
          },
        
          actionText: {
            fontSize: 18,     
            color: '#909294',
          },
        
          playButton: {
            padding: 8,
          },
        
          arrowIcon: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
            position: 'relative',
            left: 170,
          },

          iconContainer: {
            marginTop: 50,
            paddingHorizontal: 0,
            backgroundColor: '#F3F5F7',
            borderRadius: 8,
            paddingVertical: -9,
            position: 'relative',
            right: 189,
          },
        
          iconRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        
          iconButton: {
            padding: 8,
          },
        
          optionIcon: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
          },
        
          visitIcon: {
            width: 30,
            height: 30,
            resizeMode: 'contain',
          },
        
          playIcon: {
            width: 240,
            height: 60,
            resizeMode: 'contain',
          },
          loadingContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          },
          iconButton1: {
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            width: 310,
            height: 40,
          },
          iconImage: {
            width: 40,
            height: 40,
            resizeMode: 'contain',
          },
});
