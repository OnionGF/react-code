/*
 * @Author: onino
 * @Date: 2020-10-28 19:44:34
 * @LastEditors: onino
 * @LastEditTime: 2022-10-03 10:40:44
 * @Description: 请填写简介
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "./App"

ReactDOM.render(<App key="a" />, document.getElementById("root"), function () {
  console.log("callback")
})
