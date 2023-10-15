import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import { useStore } from '../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme'

import Header from '../components/Header'
import OrderCard from '../components/OrderCard'

const OrderHistoryScreen = ({ navigation }: any) => {
  const orderList = useStore((state: any) => state.OrderList)
  const tabBarHeight = useBottomTabBarHeight()

  const navigationHandler = ({ id, index, type }: any) => {
    navigation.push('Detail', {
      index: index,
      id: id,
      type: type
    })
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
            <Header title="Order History" />

            {/* {orderList.length == 0 ? (
            <EmptyListAnimation title={'Cart is Empty'} />
            ) : ( */}
            <View style={styles.ListItemContainer}>
              {orderList.map((data: any, index: any) => (
                <OrderCard
                  key={index.toString()}
                  navigationHandler={navigationHandler}
                  cartItems={data.CartList}
                  cartListPrice={data.CartListPrice}
                  orderDate={data.OrderDate}
                />
              ))}
            </View>
            {/* )} */}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default OrderHistoryScreen

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
