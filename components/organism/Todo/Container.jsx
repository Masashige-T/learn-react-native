import React from "react"
import { useSelector } from "react-redux"
import { Presentational } from "./Presentational"

const Container = () => {
  const { todo } = useSelector(state => state.todo)

  const _props = { todo }

  return <Presentational {..._props} />
}

export default Container
