import React, { Component } from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, width: 200, justifyContent: "space-around" }}>
          <Button title="Tambah" onPress={() => this.props.tambahNilai()} />
          <Text style={styles.text}>{this.props.angka}</Text>
          <Button title="Kurangi" onPress={() => this.props.kurangiNilai()} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    angka: state.angka,
  };
};

const mapDispactherToProps = (dispatch) => {
  return {
    tambahNilai: () => dispatch({ type: "TAMBAHKAN" }),
    kurangiNilai: () => dispatch({ type: "KURANGI" }),
  };
};

export default connect(mapStateToProps, mapDispactherToProps)(CounterApp);

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
