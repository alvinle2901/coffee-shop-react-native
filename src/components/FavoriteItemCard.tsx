import { ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING
} from '../theme/theme'

import ImageBackgroundInfo from './ImageBackgroundInfo'

interface FavoriteItemCardProps {
  id: string
  type: string
  roasted: string
  imagelink_square: ImageProps
  name: string
  special_ingredient: string
  average_rating: number
  description: string
  ratings_count: string
  ingredient: string
  favorite: boolean
  toggleItem: any
}

const FavoriteItemCard: React.FC<FavoriteItemCardProps> = ({
  id,
  type,
  roasted,
  imagelink_square,
  name,
  special_ingredient,
  average_rating,
  description,
  ratings_count,
  ingredient,
  favorite,
  toggleItem
}) => {
  return (
    <View style={styles.CardContainer}>
      <ImageBackgroundInfo
        EnableBackHandler={false}
        imagelink_portrait={imagelink_square}
        type={type}
        id={id}
        favourite={favorite}
        name={name}
        special_ingredient={special_ingredient}
        ingredients={ingredient}
        average_rating={average_rating}
        ratings_count={ratings_count}
        roasted={roasted}
        ToggleFavourite={toggleItem}
      />
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
        style={styles.ContainerLinearGradient}
      >
        <Text style={styles.DescriptionTitle}>Description</Text>
        <Text style={styles.DescriptionText}>{description}</Text>
      </LinearGradient>
    </View>
  )
}

export default FavoriteItemCard

const styles = StyleSheet.create({
  CardContainer: {
    borderRadius: BORDERRADIUS.radius_25,
    overflow: 'hidden'
  },
  ContainerLinearGradient: {
    gap: SPACING.space_10,
    padding: SPACING.space_20
  },
  DescriptionTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.secondaryLightGreyHex
  },
  DescriptionText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex
  }
})
