//import liraries
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import dogIcon from '../assets/icons8-dog-100.png'


// create a component
const ShowImage = ({dogurl, isloaded}) => {
    useEffect(() => {
        console.log(dogurl);
        console.log(isloaded);
    },[dogurl]);

    return (
        <View style={styles.container}>
            <Text>{`${dogurl}`}</Text>
            <Image
                style={styles.img}
                source={isloaded ?
                    {uri: `${dogurl}`}:
                    {uri: dogIcon}
                }     
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        padding: 15,
    }, 
    img: {
        width: 300,
        height: 250
    }
});

//make this component available to the app
export default ShowImage;
