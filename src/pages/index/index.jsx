import { Component } from 'react'
import { View, RichText } from '@tarojs/components'
import Table from '../../components/Table/table'
import './index.scss'

export default class Index extends Component {
  state = {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class'
      },
      children: [{
        type: 'text',
        text: 'Hello World!'
      }]
    }],
    htmlSnip: `<div class="div_class">
      <h1 onclick="function () {console.log(111)}">Title</h1>
      <p class="p">
        Life is&nbsp;<i>like</i>&nbsp;a box of
        <b>&nbsp;chocolates</b>.
      </p>
      <div>你好呀</div>
      <table class="table-demo" coll>
        <tr>
          <td class="td">1</td>
          <td class="td">1</td>
          <td class="td">1</td>
          <td class="td">1</td>
        </tr>
      </table>
    </div>
    `
  }

  render () {
    return (
      <View className='index'>
         <RichText nodes={this.state.nodes} />
         <RichText nodes={this.state.htmlSnip} />
         <Table />
      </View>
    )
  }
}
