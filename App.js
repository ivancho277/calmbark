import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import fetchdogpic from './apis/dogapi'
import dogIcon from './assets/icons8-dog-100.png'

export default function App() {

  [dogPicture, setDogPicture] = useState();
  //[buttonClick, setButtonClick] = useState(false);
  // const initialState = async () => {fetchdogpic().then((response) => {
  //     response.data.
  // })
  useEffect(() => {
    let ignore = false;

    async function fetchdata() {
      const dogURL = await fetchdogpic();
      if (!ignore) {
        setDogPicture(dogURL);
      }
    }
      fetchData();
      return () => { ignore = true; }
    }, [dogPicture]);



  return (
    <View style={styles.container}>
      <Text>An App for Babe sauce {`${dogPicture}`}</Text>
      <Button onPress={() => fetchdogpic()} soruce={dogPicture} title="press for puppers" />
      <Image style={styles.img} source={dogPicture} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '70%',
    height: '60%',
  }
});
