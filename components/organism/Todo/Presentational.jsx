import React from "react"
import { StatusBar } from "react-native"
import styled from "styled-components/native"

import { Item } from "../../atom/Item"
import { List } from "../../atom/FlatList"

export const Presentational = ({ todo }) => {
  const renderItem = ({ item }) => <Item title={item.title} />

  return (
    <StyledSafeArea>
      <List data={todo} render={renderItem} keyExtractor={item => item.id} />
    </StyledSafeArea>
  )
}

const StyledSafeArea = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
`
