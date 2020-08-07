import React from "react"
import { FlatList } from "react-native"

export const List = ({ data, render }) => {
  return <FlatList data={data} renderItem={render} />
}
