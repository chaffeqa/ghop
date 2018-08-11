import React from 'react'
import { Link } from 'gatsby'

import Layout from './layout'
import Heading from './Heading'
import Ipsom from './ipsom'
import Who from './who'
import What from './what'
import When from './when'
import Where from './where'
import Why from './Why'
import How from './How'
// import Lorem from './lorem'

import bg1 from './Heading/1.jpg'
import bg2 from './Heading/2.jpg'
import bg3 from './Heading/3.jpg'
import bg4 from './Heading/4.jpg'
import bg5 from './Heading/5.jpg'
import './section.css'


const styles = {
  h1: {
    height: '20vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  p: {
    height: '5vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    maxWidth: '1800px',
    padding: '0',
    minHeight: '70vh',
    margin: `2rem auto 0`,
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionImg: {
    flex: '0 1 auto',
    margin: `1rem auto`,
    maxWidth: '100%',
    minWidth: '50%',
  },
  sectionText: {
    flex: '0 1 auto',
    padding: '0 1rem',
    maxWidth: '100%',
    minWidth: '50%',
  },
  about: {
    height: '5vh',
    color: 'white',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
const versions = [1, 2, 3]


class Section extends React.Component {
  render() {
    const {section, imageSrc, revealed, component} = this.props
    return (
      <section id={section} className={['section', revealed ? 'section-revealed' : 'section-hidden'].join(' ')}>
        <div className='section-img'><img src={imageSrc} alt={section} /></div>
        <div className='section-text'>{component}</div>
      </section>
    )
  }
}

let sections = [];


class Sample extends React.Component {
  
  
  
  boundListener = false;
  
  onScroll = (event) => {
    // console.log(event)
    const screen = window.screen
    const scrollBot = window.scrollY + (screen.availHeight || screen.height) * 2/3
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i]
      if (!section.revealed && section.rect.top <= scrollBot) {
        section.revealed = true
        section.el.classList.add('section-revealed')
        section.el.classList.remove('section-hidden')
      }
    }
  }
  
  updateSections = (event) => {
    console.log('resize? ' + !!(event));
    const sectionsEls = document.querySelectorAll('.section')
    for (let i = 0; i < sectionsEls.length; i++) {
      const el = sectionsEls[i]
      if (sections.length <= i) {
        sections.push({ el: sectionsEls[i] })
      }
      const section = sections[i]
      section.rect = el.getBoundingClientRect()
      section.id = el.id
    }
  }
  
  componentDidMount() {
    if (!this.boundListener) {
      this.updateSections()
      document.addEventListener('resize', this.updateSections)
      document.addEventListener('scroll', this.onScroll, {passive: true})
      this.boundListener = true
    } else {
      console.log('ignore')
    }
  }
  
  componentWillUnmount() {
    if (this.boundListener) {
      document.removeEventListener('resize', this.updateSections)
      document.removeEventListener('scroll', this.onScroll)
      this.boundListener = false
    }
  }
  
  render() {
    const {version} = this.props
    return (
      <Layout>
        <Heading version={version} />
        <h1 style={styles.h1}>Granby House of Prayer</h1>
        <p style={styles.p}>Version: {version || 1}</p>
        <Section component={<Who />} section='who' imageSrc={bg1} alt='bg1' revealed={false} />
        <Section component={<What />}  section='what' imageSrc={bg2} alt='bg1' revealed={false} />
        <Section component={<When />}  section='when' imageSrc={bg3} alt='bg1' revealed={false} />
        <Section component={<Where />}  section='where' imageSrc={bg4} alt='bg1' revealed={false} />
        <Section component={<Why />}  section='why' imageSrc={bg5} alt='bg1' revealed={false} />
        <Section component={<How />}  section='how' imageSrc={bg5} alt='bg1' revealed={false} />
        {versions.map(version => (
          <Link key={version} style={styles.about} to={version === 1 ? '/' : `/v${version}`}>
            Version {version}
          </Link>
        ))}
      </Layout>
    )
  }
}

export default Sample
