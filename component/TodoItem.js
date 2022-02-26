import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ deleteTask, text }) {
    return (
        <View style={styles.item} >
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
            <TouchableOpacity onPress={(index) => deleteTask(index)}>
                <MaterialIcons name="delete" size={24} color="red" />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f7f7f7',
        padding: 15,
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemText: {
        width: '80%',
        fontSize: 20
    },
});


