import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme'

import Header from '../components/Header'
import FavoriteItemCard from '../components/FavoriteItemCard'

const FavoriteScreen = ({ navigation }: any) => {
  const favoriteList = useStore((state: any) => state.FavoriteList)
  console.log(favoriteList)
  const tabBarHeight = useBottomTabBarHeight()

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList)
  const deleteFromFavoriteList = useStore(
    (state: any) => state.deleteFromFavoriteList
  )

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)
  }

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View
          style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}
        >
          <View style={styles.ItemContainer}>
            <Header title="Favorites" />

            {/* {CartList.length == 0 ? (
              <EmptyListAnimation title={''} />
            ) : ( */}
            <View style={styles.ListItemContainer}>
              {favoriteList.map((data: any) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.push('Detail', {
                      index: data.index,
                      id: data.id,
                      type: data.type
                    })
                  }}
                  key={data.id}
                >
                  <FavoriteItemCard
                    id={data.id}
                    type={data.type}
                    roasted={data.roasted}
                    imagelink_square={data.imagelink_square}
                    name={data.name}
                    special_ingredient={data.special_ingredient}
                    average_rating={data.average_rating}
                    description={data.description}
                    ratings_count={data.ratings_count}
                    favorite={data.favourite}
                    ingredient={data.ingredients}
                    toggleItem={ToggleFavourite}
                  />
                </TouchableOpacity>
              ))}
            </View>
            {/* )} */}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between'
  },
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20
  }
})
