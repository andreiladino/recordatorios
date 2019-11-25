import React from 'react'
import { TouchebleHighlight, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
        button: {},
        text: {}
})

export default ({ title, onPress }) => (
        <TouchebleHighlight style={styles.button} onPress={onPress}>
                <Text style={styles.text}>
                        {title}
                </Text>
        </TouchebleHighlight>
)