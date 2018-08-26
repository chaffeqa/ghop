import React from 'react'

const Resource = ({title, description, imageUrl, url}) => {
  return (
    <a target="_blank" href={url} className="resource">
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
]

const Resources = () => (
  <div className="resources">
    {resources.map(resource => (
      <Resource key={resource.title} {...resource} />
    ))}
  </div>
)

export default Resources
