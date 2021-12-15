import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Props } from './interface'

const Button: FC<Props> = ({ text, onPress, disabled, style, styleText }) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} style={style}>
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
