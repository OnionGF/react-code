/*
 * @Author: onino
 * @Date: 2020-10-29 10:17:22
 * @LastEditors: onino
 * @LastEditTime: 2022-10-03 10:41:26
 * @Description: 请填写简介
 */
import * as React from "react"

function App(props) {
  console.log(props.key)
  return <div>App works</div>
}

// class App extends React.Component {
//   componentDidMount() {
//     console.log("componentDidMount")
//   }
//   render() {
//     return <div>class component</div>
//   }
// }

export default App
