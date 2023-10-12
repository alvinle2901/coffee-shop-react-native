import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme'
import CustomIcon from './CustomIcon'
import BGIcon from './BGIcon'

const CARD_WIDTH = Dimensions.get('window').width * 0.32

interface CoffeeCardProps {
  id: string
  index: number
  type: string
  roasted: string
  imagelink_square: string
  name: string
  special_ingredient: string
  average_rating: number
  price: any
  buttonPressHandler: any
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  index,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.CardContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground
        source={imagelink_square}
        style={styles.CardImageBackground}
        resizeMode="cover"
      >
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name="star"
            color={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_16}
          />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View>
      </ImageBackground>
      <Text>{name}</Text>
      <Text>{special_ingredient}</Text>
      <View style={styles.CardFooter}>
        <Text>
          $ <Text>{price.price}</Text>
        </Text>
        <TouchableOpacity>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default CoffeeCard

const styles = StyleSheet.create({
  CardContainer: {},
  CardImageBackground: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden'
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryBlackRGBA,
    alignItems: 'center',
    justifyContent: 'center',
    gap: SPACING.space_10,
    paddingHorizontal: SPACING.space_15,
    position: 'absolute',
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0
  },
  CardRatingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    lineHeight: 22,
    fontSize: FONTSIZE.size_14
  },
  CardFooter: {}
})
