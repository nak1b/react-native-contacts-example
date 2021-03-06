import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import ContactForm from './ContactForm';
import { NMContactItem, NMSpinner, NMTouchableIcon, NMEmptyView } from '../components/';
import { fetchContacts, contactSelected } from '../actions/ContactsActions';
import { toggleContactForm, nameChanged, phoneChanged, saveContact } from '../actions/ContactFormActions';

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

  toggleForm() {
  	const { showForm, toggleContactForm } = this.props;
  	toggleContactForm(!showForm);
  }

  saveContact() {
  	const { formName, formPhone } = this.props;
  	const contact = {
  		givenName: formName,
  		phoneNumbers: [{
		    label: "mobile",
		    number: formPhone,
		  }]
  	};

  	if(!formName || !formPhone) {
  		return Alert.alert('Oops!', 'Seems like you have not entered all the required data. Please try again!');
  	}

  	this.props.saveContact(contact);
  }
 
  renderAddContactForm() {
  	const { showForm, formName, formPhone, nameChanged, phoneChanged } = this.props;

  	return (
  		<ContactForm 
  			isVisible={showForm}
  			onClose={() => this.toggleForm()}
  			nameValue={formName}
  			phoneValue={formPhone}
  			nameChanged={nameChanged}
  			phoneChanged={phoneChanged}
  			onSave={() => this.saveContact()}
  		/>
    );
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
		const { loading, allContacts } = this.props;

		if(loading) return <NMSpinner/>

		if(!allContacts || allContacts.length === 0) {
			return <NMEmptyView label='No Contacts' />
		}

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
					<TouchableOpacity onPress={() => this.toggleForm()}>
						<Text style={styles.rightBtn}>ADD</Text>
					</TouchableOpacity>
				</View>

				{this.renderContactList()}
				{this.renderAddContactForm()}
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
	const { showForm, name, phone } = state.contactForm;

  return {
  	loading,
  	allContacts,
  	error,
  	showForm,
  	formName: name,
  	formPhone: phone
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	fetchContacts,
  	contactSelected,
  	toggleContactForm,
  	nameChanged,
  	phoneChanged,
  	saveContact
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
