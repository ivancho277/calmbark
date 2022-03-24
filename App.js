import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import fetchdogpic from './apis/dogapi'
import dogIcon from './assets/icons8-dog-100.png'

export default function App() {

  [dogPicture, setDogPicture] = useState(dogIcon);
  [dogPictures, updateDogPictures] = useState([]);

  const onClick = async () => {
    await fetchdogpic().then(res => {
      updateDogPictures(dogPictures => [...dogPictures, res]);
    });
  }
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
        //dogPictures.push(dogURL);
        updateDogPictures(dogURL);
      }
      console.log("-------------------------------")
      console.log(dogPictures);
    }
    fetchdata();
    return () => { ignore = true; }
  }, [dogPicture]);



  return (
    <View style={styles.container}>
      <Text>An App for Babe sauce {`${dogPicture}`}</Text>
      <Button onPress={() => onClick()}  title="press for puppers" />
      <Image
        style={styles.img}
        source={{
          uri: dogPicture
        }}
      />
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
