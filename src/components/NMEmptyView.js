import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const NMEmptyView = ({label}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
		</View>
	);
}

NMEmptyView.propTypes = {
  label: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 24,
		marginRight: 24
	},

	label: {
		fontSize: 22,
		color: '#5d5d5d',
		textAlign: 'center'
	}
});

export default NMEmptyView;