import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Item from './item'
import Button from './Button'
import datos from './Datos'

export default class App extends React.Component {
	handlePress = () => {

	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}><Text style={styles.title}>Recordatorios</Text></View>
				<Button title='Agregar' onPress={this.handlePress} />
				<FlatList data={datos} renderItem={Item} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
	},
	header: {
		height: 100,
		borderBottomWidth: 1,
		backgroundColor: '#ddd'
	},
	title: {
		textAlign: 'center',
		marginTop: 45,
		fontSize: 28,
	}
});
