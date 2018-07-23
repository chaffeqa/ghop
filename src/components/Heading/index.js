import React from 'react'

import bg1 from './1.jpg'
import bg2 from './2.jpg'
import bg3 from './3.jpg'
import bg4 from './4.jpg'
import bg5 from './5.jpg'
import './animation.css'

const durationMs = 5000

const styles = {
  wrapper: {
    height: '80vh',
    width: '100vw',
    position: 'relative',
  },
  bgItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'black',
    backgroundSize: 'cover',
    opacity: 0,
    willChange: 'opacity',
    backgroundBlendMode: 'screen',
    animationName: 'heading-bg-animation',
    animationTimingFunction: `ease-out`,
    animationIterationCount: `infinite`,
  },
}

const bgs = [bg3, bg4, bg1, bg2, bg5]

// const mappings = [
//   {
//     image: `url(${bg1})`,
//   },
// ]

// {bgs.map((item, i) => (<BgBlendImage key={i} index={i} />))}

const bgStyleFor = index =>
  Object.assign({}, styles.bgItem, {
    backgroundImage: `url(${bgs[index]})`,
    animationDelay: `${index * durationMs}ms`,
    animationDuration: `${bgs.length * durationMs}ms`,
    animationTimingFunction: `linear`,
  })
const bgBlendStyleFor = (index, nextIndex) =>
  Object.assign({}, styles.bgItem, {
    backgroundImage: `url(${bgs[index]}), url(${bgs[nextIndex]})`,
    animationDelay: `${index * durationMs + Math.round(durationMs / 2)}ms`,
    animationDuration: `${bgs.length * durationMs}ms`,
  })

const BgImage = ({ item, index }) => <div style={bgStyleFor(index)} />
const BgBlendImage = ({ item, index }) => {
  const nextIndex = index === bgs.length - 1 ? 0 : index + 1
  return <div style={bgBlendStyleFor(index, nextIndex)} />
}

const Heading = () => (
  <div style={styles.wrapper}>
    {bgs.map((item, i) => <BgImage key={i} index={i} />)}
    {bgs.map((item, i) => <BgBlendImage key={i} index={i} />)}
  </div>
)

export default Heading
