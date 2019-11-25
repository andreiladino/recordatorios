import React from 'react'
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        container: {
                borderBottomWidth: 1,
                borderColor: '#ddd',
        },
        item: {
                fontSize: 18,
                height: 50,
                padding: 15,
        }
})

export default ({ item }) => <Text style={styles.item}>{item.title}</Text>