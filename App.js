import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from "./src/components/ListItem/ListItem";
import UserInput from "./src/components/UserInput/UserInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import narutoImage from "./src/assets/naruto.png";

export default class App extends Component {
  state = {
    selectedPlace: null,
    places: []
  };

  placeChangeAdd = placeName => {
    this.setState(prevState => {
      return {
        places: [
          ...prevState.places,
          {
            key: Math.random(),
            name: placeName,
            image: {
              uri:
                "https://vignette.wikia.nocookie.net/naruto/images/4/42/Naruto_Part_III.png/revision/latest/scale-to-width-down/300?cb=20180117103539"
            } //narutoImage }
          }
        ]
      };
    });
  };

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });
  };
  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        // places: [
        //   ...prevState.places.slice(0, index),
        //   ...prevState.places.slice(index + 1)
        // ]
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedPlace: null
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <UserInput placeChangeAdd={this.placeChangeAdd} />
        <PlaceList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButtion: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
