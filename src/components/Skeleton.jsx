import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => {
  return (
    <ContentLoader
      speed={1.5}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f2f2f2"
      foregroundColor="#f1a337"
      {...props}
    >
      <rect x="11" y="264" rx="10" ry="10" width="249" height="69" />
      <rect x="14" y="346" rx="15" ry="15" width="81" height="38" />
      <rect x="135" y="344" rx="20" ry="20" width="127" height="41" />
      <circle cx="132" cy="120" r="112" />
      <rect x="16" y="240" rx="10" ry="10" width="241" height="15" />
    </ContentLoader>
  )
}

export default Skeleton
