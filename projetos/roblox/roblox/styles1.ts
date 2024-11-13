import { Montserrat_700Bold, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 40,
    paddingHorizontal: 22,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 5,
    borderRadius: 9,
    marginBottom: 30,
    marginTop: 10,
    paddingHorizontal: 22,

  },
  searchInput: {
    flex: 1,
    fontSize: 21,
    marginRight: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  
  profileImage: {
    width: 39,
    height: 39,
    borderRadius: 40,
  },
  
  profileName: {
    fontSize: 23,
    marginLeft: 10,
    fontFamily: 'Montserrat_700Bold',
  },
  
  voiceChatContainer: {
    backgroundColor: '#ffffff',
    padding: 9,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 4,
    marginTop: -9,
    borderWidth: 1,
    borderColor: '#BDBEC0',
  },
    iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    width: 29,
    height: 35,
    marginRight: 10,
    top: 10,
  },
  voiceChatText: {
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 11,
    top: -4,
    left: -3,

  },
  voiceChatSubText: {
    color: '#666',
    textAlign: 'justify',
    marginVertical: -1,
    marginLeft: 48,
    fontSize: 16,
    top: -6,

  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 78,
    borderRadius: 11,
    marginTop: 11,
  },
  buttonText: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 21,
    marginVertical: 10,
    fontFamily: 'Montserrat_700Bold',

  },
  friendContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  friendImage: {
    width: 100,
    height: 103,
    borderRadius: 25,
  },
  friendName: {
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold',
  },
  commonFriendsText: {
    fontSize: 19,
    color: '#777',
    marginTop: 5,
  },
  recommendationContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
  },
  
  recommendationImage: {
    width: 160,
    height: 100,
    borderRadius: 10,
  },
  
  recommendationName: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
  },
  
  recommendationRating: {
    color: '#888',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  ratingIcon: {
    width: 13,
    height: 13,
    marginRight: 5,
  },
  
  personContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
    marginBottom: 20,
  },
  
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  
  personInfoContainer: {
    alignItems: 'flex-start',
    marginLeft: -1,
  },
  
  personName: {
    fontSize: 14,
    marginBottom: -2,
    fontWeight: 'bold',
  },
  
  personIcon: {
    width: 16,
    height: 16,
    marginBottom: 5,
  },
  
  personDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  personCommonFriend: {
    fontSize: 14,
    color: '#636466',
    marginLeft: 1,
  },
  

  continueContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
    paddingBottom: 20,
  },
  
  continueImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  
  continueName: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    flex: 2,
  },
  
  continueStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  
  continueStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  
  continueStatIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  
  continueStatText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#8F9192',
  },
  
  sponsoredContainer: {
    alignItems: 'flex-start',
    marginRight: 15,
    paddingBottom: 80,
  },
  
  sponsoredImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  
  sponsoredName: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'left',
    flex: 2,
  },
  
  sponsoredStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
  },
  
  sponsoredStat: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  
  sponsoredStatIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  
  sponsoredStatText: {
    fontSize: 14,
    color: '#636466',
  },
  
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  
  navItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  
  
  navText: {
    fontSize: 12,
    fontFamily: 'Montserrat_700Bold',
    color: '#636363',
  },
  
  
  
  navIcon: {
    width: 28,
    height: 28,
    marginBottom: 2,
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
export default styles;
