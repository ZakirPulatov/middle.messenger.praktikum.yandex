import Block from '../../utils/block.ts'
import * as cls from './button.module.scss'
import buttonTpl from './chatPage.hbs'

const data = {
  innerText: "Кнопка",
  class: cls
}

class Button extends Block {
  constructor(props){
    super('button', props)
  }

  render() {
    return `<div>${this.props.text}</div>`;
  }
}