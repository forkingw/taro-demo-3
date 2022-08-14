import { Component } from "react";
import { View } from "@tarojs/components";
import './table.scss'

export default class Table extends Component {
  state = {
    columns: [
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age'
      }
    ],
    dataSource: [
      {
        name: '胡彦斌',
        age: 32,
        // address: '西湖区湖底公园1号',
      },
      {
        name: '胡彦祖',
        age: 42,
        // address: '西湖区湖底公园1号',
      }
    ]
  }
  render () {
    const TableContent = this.state.columns.map(c => {
      const cols = this.state.dataSource.map((d, i) => <View className='td' key={d.dataIndex + i}>{d[c.dataIndex]}</View>)
      return <View className='col' key={c.dataIndex}>
        <View className='th'>{c.title}</View>
        {cols}
      </View>
    })
    return <View className='table'>
      {TableContent}
    </View>
  }
}