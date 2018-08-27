import React from 'react'

import bg1 from './yellow-wood.jpg'
import bg2 from './flower-headress.jpg'
import bg3 from './praise-field.jpg'
import bg4 from './green-wood.jpg'
import bg5 from './4.jpg'
import './animation.css'

const durationMs = 5000

const styles = {
  wrapper: {
    height: '90vh',
    width: '100vw',
    position: 'relative',
  },
  bgItem: {
    position: 'fixed',
    zIndex: '-1',
    top: 0,
    left: 0,
    height: '90vh',
    width: '100vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'transparent',
    // backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    opacity: 0,
    willChange: 'opacity,transform',
    backgroundBlendMode: 'screen',
    animationName: 'heading-bg-animation',
    animationTimingFunction: `ease-out`,
    animationIterationCount: `infinite`,
  },
}

const bgs = [bg1, bg2, bg3, bg4, bg5]

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

const IntroImg = () => (
  <div className="intro-img">
    <div className="intro-img__t1">Hosting</div>
      <div className="intro-img__t2">God's</div>
        <div className="intro-img__t3">Presence</div>
  </div>
)

const Heading = ({ version }) => (
  <div className="heading-img-container" style={styles.wrapper}>
    {[1, 3].includes(version) &&
      bgs.map((item, i) => <BgImage key={i} index={i} />)}
    {[2, 3].includes(version) &&
      bgs.map((item, i) => <BgBlendImage key={i} index={i} />)}
      
    <IntroImg />
  </div>
)

export default Heading
