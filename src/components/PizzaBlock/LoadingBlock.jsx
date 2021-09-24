import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
  return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="152" r="115" />
            <rect x="0" y="279" rx="6" ry="6" width="280" height="26" />
            <rect x="1" y="317" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="423" rx="6" ry="6" width="100" height="31" />
            <rect x="133" y="416" rx="20" ry="20" width="145" height="41" />
        </ContentLoader>
    );
}

export default LoadingBlock;
