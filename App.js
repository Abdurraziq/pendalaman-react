import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";

class App extends Component {
  state = {
    angka: 0,
  };

  tambah = () => {
    this.setState({ angka: this.state.angka + 1 });
  };

  kurang = () => {
    this.setState({ angka: this.state.angka - 1 });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: 200, justifyContent: "space-around" }}>
          <Button title="Tambah" onPress={this.tambah} />
          <Text style={styles.text}>{this.state.angka}</Text>
          <Button title="Kurangi" onPress={this.kurang} />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  text: {
    fontSize: 40,
    alignSelf: "center",
  },
});
