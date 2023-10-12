import React, { useState } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import { useStore } from '../store/store'

import Header from '../components/Header'
import CustomIcon from '../components/CustomIcon'

const getCategoriesfromData = (data: any) => {
  let temp: any = {}
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1
    } else {
      temp[data[i].name]++
    }
  }
  let categories = Object.keys(temp)
  categories.unshift('All')
  return categories
}

const getCoffeeList = (category: string, data: any) => {
  if (category == 'All') {
    return data
  } else {
    let coffeeList = data.filter((item: any) => item.name == category)
    return coffeeList
  }
}

const HomeScreen = () => {
  const CoffeeList = useStore((state: any) => state.CoffeeList)
  const BeanList = useStore((state: any) => state.BeanList)

  const [categories, setCategories] = useState(
    getCategoriesfromData(CoffeeList)
  )
  const [search, setSearch] = useState('')
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0]
  })
  const [sortedCoffee, setSortedCoffee] = useState(
    getCoffeeList(categoryIndex.category, CoffeeList)
  )

  const tabBarHeight = useBottomTabBarHeight()

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex}></StatusBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        {/* Header */}
        <Header title="Home Screen" />

        <Text style={styles.ScreenTitle}>
          Find the best{'\n'}coffee for you
        </Text>
        {/* Search */}

        <View style={styles.InputContainerComponent}>
          <TouchableOpacity>
            <CustomIcon
              style={styles.InputIcon}
              name="search"
              size={FONTSIZE.size_18}
              color={
                search.length > 0
                  ? COLORS.primaryOrangeHex
                  : COLORS.primaryLightGreyHex
              }
            ></CustomIcon>
          </TouchableOpacity>
          <TextInput
            placeholder="Find your coffee"
            value={search}
            onChangeText={text => setSearch(text)}
            placeholderTextColor={COLORS.primaryLightGreyHex}
            style={styles.TextInputContainer}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center'
  },
  InputIcon: {
    marginHorizontal: SPACING.space_20
  },
  TextInputContainer: {
    flex: 1,
    height: SPACING.space_20 * 3,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  }
})
