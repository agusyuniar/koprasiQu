import React from 'react'
import { Transition, animated } from 'react-spring/renderprops'
import './component.css'

const pages = [
  style => (
    <animated.div style={{ ...style}}>
        A
        <img src={require('../img/studentLogin.png')} alt='loginIMG' className='gambarlogin ' />
        </animated.div>
  )
]

export default class App extends React.PureComponent {
  state = { index: 0 }

  render() {
      console.log(animated)
    return (
      <div className="main">
        <Transition
        //   native
        //   unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(7%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(10%,0,0)' }}
          >
          {index => pages[index]}
        </Transition>
      </div>
    )
  }
}