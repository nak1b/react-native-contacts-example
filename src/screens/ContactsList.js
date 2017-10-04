import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { NMContactItem, NMSpinner } from '../components/';
import { fetchContacts, contactSelected } from '../actions/ContactsActions';


class ContactsList extends Component {
	constructor() {
    super();

    this.dataSource = [];
  }

	componentWillReceiveProps(nextProp) {
		if(nextProp.error) {
		  Alert.alert('Oops!', 'Something went wrong fetching your contacts data. Please try again!');
		}

		//setup up contacts datasource
		this.createDataSource(nextProp);
	}

	componentWillMount() {
		this.props.fetchContacts();

		//setup up contacts datasource
    this.createDataSource(this.props);
	}

	createDataSource({allContacts}) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(allContacts);
  }

  onContactCheck(contact) {
  	const { recordID, isSelected } = contact;
  	const data = {
  		id: recordID,
  		selected: !isSelected
  	};
  	this.props.contactSelected(data);
  }

  addContact() {

  }

	renderContact(contact) {
		return (
			<NMContactItem
				contact={contact}
				onChange={() => this.onContactCheck(contact)}
			/>
		);
	}

	renderContactList() {
		const { loading } = this.props;

		if(loading) return <NMSpinner/>

		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={(data) => this.renderContact(data)}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.leftView} />
					<Text style={styles.headerText}>Contacts List</Text>
					<TouchableOpacity onPress={() => this.addContact()}>
						<Text style={styles.rightBtn}>ADD</Text>
					</TouchableOpacity>
				</View>

				{this.renderContactList()}
				
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 70,
		backgroundColor: '#5fb7e4',
		paddingTop: 6
	},

	headerText: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 20,
		color: '#fff',
		fontWeight: '500',
		textAlign: 'center'
	},

	leftView: {
		width: 44
	},

	rightBtn: {
		alignSelf: 'flex-end',
		width: 44,
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16

	}
});


const mapStateToProps = (state) => {
	const { loading, allContacts, error } = state.contacts;

  return {
  	loading,
  	allContacts,
  	error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	fetchContacts,
  	contactSelected
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
