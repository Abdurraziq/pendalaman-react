import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://reactnative.dev/movies.json")
      .then((res) => res.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hai, Selamat datang... 😀</Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ marginVertical: 6 }}
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <Card style={{ marginVertical: 6 }}>
              <Card.Content>
                <Title>{item.title}</Title>
                <Paragraph>{item.releaseYear}</Paragraph>
              </Card.Content>
            </Card>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});
