import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="relative mr-2 shadow-lg">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      ></Image>
      <Text className="absolute bottom-1 left-1 text-white text-shadow-sm font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryCard
