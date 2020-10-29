import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

class PizzaTranslator extends Component {
  render() {
    return (
      <View style={{ padding: 24 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Silahkan ketik disini untuk diterjemahkan"
          onChangeText={(text) => this.props.tampilkanTeks(text)}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.props.teks
            .split(" ")
            .map((word) => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    teks: state.teks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tampilkanTeks: (teksBaru) => dispatch({ type: teksBaru }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaTranslator);
