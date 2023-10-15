import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import OrderItemCard from './OrderItemCard'

interface OrderCardProps {
  navigationHandler: any
  cartItems: any
  cartListPrice: string
  orderDate: string
}

const OrderCard: React.FC<OrderCardProps> = ({
  navigationHandler,
  cartItems,
  cartListPrice,
  orderDate
}) => {

  return (
    <View style={styles.CardContainer}>
      <View style={styles.CardHeader}>
        <View>
          <Text style={styles.headerTitle}>Order Time</Text>
          <Text style={styles.headerSubTitle}>{orderDate}</Text>
        </View>
        <View>
          <Text style={styles.headerTitle}>Total amount</Text>
          <Text style={styles.headerSubTitle}>{cartListPrice}</Text>
        </View>
      </View>

      <View style={styles.ListContainer}>
        {cartItems.map((data: any, index: any) => (
          <TouchableOpacity
            key={index.toString() + data.id}
            onPress={() => {
              navigationHandler({
                index: data.index,
                id: data.id,
                type: data.type
              })
            }}
          >
            <OrderItemCard
              type={data.type}
              name={data.name}
              imagelink_square={data.imagelink_square}
              special_ingredient={data.special_ingredient}
              prices={data.prices}
              ItemPrice={data.ItemPrice}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default OrderCard

const styles = StyleSheet.create({
  CardContainer: {
    gap: SPACING.space_10
  },
  CardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex
  },
  headerSubTitle: {
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex
  },
  PriceContainer: {
    alignItems: 'flex-end'
  },
  HeaderPrice: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryOrangeHex
  },
  ListContainer: {
    gap: SPACING.space_20
  }
})
