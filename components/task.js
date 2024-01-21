import React from "react";

import {View,Text,StyleSheet} from "react-native";

const Task = (props) => {
    return(

        <View style={styles.item}>

        <Text style={styles.itemText}>{props.text}</Text>
        </View>

    )}

    const styles = StyleSheet.create({
item:{

padding:15,

},
itemText:{
    fontSize: 16,
    color: '#333',
    flex: 1,
}



    });
    export default Task;

   