import React from 'react'
import { View, Text } from 'react-native'

function Error({ message }) {
  return (
    <View>
      <Text style={{ fontSize: 24, color: 'red' }}>
        Error : {message}
      </Text>
    </View>
  )
}

export default Error