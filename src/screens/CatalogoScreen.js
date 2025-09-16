import React, { useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, useWindowDimensions, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchMangas, toggleFavorite } from "../features/MangasSlice";
import CardManga from "../components/CardManga";
import SkeletonLoader from "../components/SkeletonLoader";


export default function CatalogoScreen({ navigation }) {
  const dispatch = useDispatch();
  const { data, favorites, isLoading } = useSelector(s => s.mangas);
  const { width } = useWindowDimensions();
  const numColumns = Math.max(2, Math.floor(width / 180));

  useEffect(() => {
    dispatch(fetchMangas());
  }, [dispatch]);

  const renderItem = useCallback(
    ({ item }) => (
      <CardManga
        item={item}
        isFav={favorites.includes(item.id)}
        onPress={() => navigation.navigate("Detalhes", { id: item.id })}
        onFavoritePress={() => dispatch(toggleFavorite(item.id))}
      />
    ),
    [favorites, navigation, dispatch]
  );

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={[styles.grid, { justifyContent: "space-between" }]}>
          <SkeletonLoader />
          <SkeletonLoader />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={styles.grid}
        initialNumToRender={8}
        windowSize={5}
        removeClippedSubviews
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  grid: { padding: 12 },
});
