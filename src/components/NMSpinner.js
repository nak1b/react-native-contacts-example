import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';


const NMSpinner = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator
				color='#5fb7e4'
				size='large'
				animating={true}
			/>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default NMSpinner;