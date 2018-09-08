import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Image } from 'react-native';
import { Container, Header, Left, Body, Radio, List, ListItem, Content, Text, Icon, Input, Item, Button, View } from 'native-base';
import ExampleMiddleware from '../store/middlewares/ExampleMiddleware';

class ExampleScreen extends React.Component {
 
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null
    }
    this.props.getCityList();
  }

  onItemClicked = (item) => {
    this.setState({
      selectedItem: item
    });
  }

  showList = () => {
    if (this.props.data) {
      return this.props.data.map((item) => {
        return (
            <ListItem key={item} style={styles.listItemStyle} onPress={this.onItemClicked.bind(this, item)}>
              <Left>
                <Radio selected={this.state.selectedItem === item ? true : false}
                  style={styles.radioStyle} onPress={this.onItemClicked.bind(this, item)}/>
                <Text style={styles.sportTextStyle}>{item}</Text>
              </Left>
            </ListItem>
        )
      })
    }
    else {
      return (
        <Text>Empty List</Text>
      )
    }
  }

  render() {

    return (
      <Container style={styles.container}>

        <Header style={styles.headerStyle}>
          <Body style={styles.logoBoxStyle}>
            <Image source={require('../../assets/images/headerLogo.png')} />
          </Body>
        </Header>

        <View style={styles.screenHeadingBox}>
          <Text style={styles.screenHeadingText}>Select City</Text>
        </View>


        <Header searchBar style={styles.searchStyle} >
          <Item >
            <Input placeholder="Search" />
            <Icon name="ios-search" />
          </Item>
          <Button transparent>
            <Text>Searching</Text>
          </Button>
        </Header>

        <Content padder style={styles.contentStyle}>
          <View style={styles.contentInnerView}>
            <List>
              {this.showList()}
            </List>
          </View>
        </Content>

      </Container>
    );
  }
}

export default connect(
  (state) => {
    return {
      data: state.ExampleReducer.data,
    }
  },
  (dispatch) => {
    return {
      getCityList: () => { dispatch(ExampleMiddleware.getData()) }
    }
  })(ExampleScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eceef2',
  },
  headerStyle: {
    backgroundColor: '#0e2040',
    height: 88,
  },
  logoBoxStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenHeadingBox: {
    alignItems: 'center',
  },
  screenHeadingText: {
    fontSize: 16,
    paddingTop: 14,
    paddingBottom: 12,
  },
  searchStyle: {
    backgroundColor: '#fff',
    height: 45,
  },
  contentStyle: {
    marginTop: 10,
  },
  contentInnerView: {
    backgroundColor: '#fff'
  },
  listItemStyle: {
    marginLeft: 0,
  },
  radioStyle: {
    paddingLeft: 15,
  },
  sportTextStyle: {
    marginLeft: 7
  }
});
