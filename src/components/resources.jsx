import React from 'react'

const Resource = ({title, description, imageUrl, url}) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={url} className="resource">
      <div className="resource-img" style={{backgroundImage: `url(${imageUrl})`}}></div>
      <div className="resource-group">
        <div className="resource-title">{title}</div>
        <div className="resource-description">{description}</div>
      </div>
    </a>
  )
}

const resources = [
  {
    title: 'iHop Prayer Room',
    description: `International House of Prayer is based out of Kansas City.  24/7 streaming prayer and worship!`,
    imageUrl: 'https://www.ihopkc.org/apple-touch-icon.png?v=ngGBw47L8y',
    url: `https://www.ihopkc.org/prayerroom/`,
  },
  {
    title: 'Prayer Furnaces',
    description: `The mission is to plant a sustainable furnace of 24-7-365 worship, prayer and supernatural explosive outreach, releasing a sound of indigenous, vertical, creative worship everywhere`,
    imageUrl: 'https://burn247.s3.amazonaws.com/assets/burn247_logo-28de8a0e68d7bd78fc7e474d282cad8b.png',
    url: `https://www.burn24-7.com/`,
  },
  {
    title: 'iHop Sermons',
    description: `International House of Prayer is based out of Kansas City.  24/7 streaming prayer and worship!`,
    imageUrl: 'https://www.ihopkc.org/apple-touch-icon.png?v=ngGBw47L8y',
    url: `https://www.ihopkc.org/prayerroom/`,
  },
]

const Resources = () => (
  <div className="resources">
    {resources.map(resource => (
      <Resource key={resource.title} {...resource} />
    ))}
  </div>
)

export default Resources
