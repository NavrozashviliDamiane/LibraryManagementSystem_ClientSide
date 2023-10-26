import React, { useState } from 'react';

function ClickableCard({ imageSrc, caption, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <figure
      className={`clickable-card ${hover ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imageSrc} alt={caption} style={{ height: '310px', width: '260px' }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ClickableCard;
