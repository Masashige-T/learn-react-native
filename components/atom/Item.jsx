import React from "react"
import styled from "styled-components/native"

export const Item = ({ title }) => {
  return (
    <Wrapper>
      <StyledText>{title}</StyledText>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background: #81c784;
  margin: 8px auto;
`

const StyledText = styled.Text`
  color: #fff;
  font-size: 18px;
`
