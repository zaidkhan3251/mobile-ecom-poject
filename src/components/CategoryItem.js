import React from 'react'
import { StyleSheet, View, Text, Image,Dimensions } from "react-native";
import { SCREEN_WIDTH } from '../Constants/Constants';
const ITEM_WIDTH = Math.round(SCREEN_WIDTH * 0.4);

const CategoryItem = ({ item}) => {
    return (
        <View style={styles.container} key={item.id}>
          <Image source={{ uri: item.imgUrl }} style={styles.image} />
          <View style={styles.body}>
            <Text style={styles.text}>{item.author}</Text>
          </View>
        </View>
      );
}

export default CategoryItem;
const styles = StyleSheet.create({
    container: {
      paddingLeft:10,
      backgroundColor: "white",
      width: SCREEN_WIDTH*0.43,
      elevation: 0,
    },
    image: {
      width: ITEM_WIDTH,
      height: ITEM_WIDTH*0.4,
      borderRadius: 7,
      opacity:0.7

    },
    header: {
      
    },
       
    text: {
      color: "#fff",
      fontSize: 20,
      
    },
    body: { position: 'absolute', top: 0, left: 0, right: 0, bottom: ITEM_WIDTH*0.1, justifyContent: 'center', alignItems: 'center'}    
  });
  
