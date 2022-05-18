import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import fetchdogpic from './apis/dogapi'
import dogIcon from './assets/icons8-dog-100.png'
import ShowImage from './components/showImage'

export default function App() {

  [dogPicture, setDogPicture] = useState(dogIcon);
  [dogPictures, updateDogPictures] = useState([]);
  [photoIndex, setPhotoIndex] = useState(0);

  const onPreviousPress = () => {
    console.log('position:', photoIndex);
    setPhotoIndex(photoIndex++);
  }

  const onClick = async () => {
    await fetchdogpic().then(res => {
      setDogPicture(() => res);
      updateDogPictures(dogs => [...dogs, res]);


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
        //updateDogPictures((dogs => [...dogs, dogURL]) );
        //updateDogPictures(dogURL);
        console.log('not IGNORE')
      }

      console.log("-------------------------------")
      console.log(dogPictures);
    }
    fetchdata();
    return () => { ignore = true; }
  }, [dogPicture, dogPictures]);



  return (
    <View style={styles.container}>
      <Text>An App for Babe sauce {`${dogPictures[dogPictures.length - 1]}`}</Text>
    <Button  onPress={() => onPreviousPress()} style={styles.backbtn} title="Previous Image"/>
      <Button onPress={() => onClick().then(console.log(...dogPictures))} title="press for puppers" />
      <ShowImage dogurl={dogPictures.length === 0 ? dogPicture : dogPictures[dogPictures.length - 1]} isloaded={dogPicture ? true : false} />
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
    height: '60%'
  },
  img: {
    width: '70%',
    height: '60%',
  },
  backbtn: {
    backgroundColor: "red",
    padding: '10px',
  }
});

{/* <Image
style={styles.img}
source={{
  uri: dogPicture
}}
/> */}