import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

function Loading() {
  return (
    <View>
      <Text style={{ textAlign: 'center' }}>
        <ActivityIndicator size='large' color='red'/>
      </Text>
    </View>
  )
}

export default Loading