const PopponSvg = () => (
  <svg width="250" height="280" viewBox="0 0 250 280" xmlns="http://www.w3.org/2000/svg">
    {/* Body (Oval) */}
    <ellipse cx="135" cy="145" rx="60" ry="35" fill="#f2f2f2" stroke="#000" strokeWidth="2" />
    {/* Head */}
    <circle cx="85" cy="105" r="22" fill="#f2f2f2" stroke="#000" strokeWidth="2" />
    {/* Horn */}
    <polygon points="85,83 78,60 92,60" fill="#ffd400" stroke="#000" strokeWidth="1.5" />
    {/* Eye */}
    <ellipse cx="150" cy="145" rx="5" ry="6" fill="none" stroke="#0047ff" strokeWidth="1.5" />
    {/* Smile */}
    <path d="M75,112 Q80,120 72,115" fill="none" stroke="#d1007a" strokeWidth="2" strokeLinecap="round" />
    {/* Tongue */}
    <ellipse cx="73" cy="117" rx="4" ry="3" fill="#d1007a" />
    {/* Legs */}
    <line x1="110" y1="178" x2="110" y2="210" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    <line x1="130" y1="178" x2="130" y2="210" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    <line x1="150" y1="178" x2="150" y2="210" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    <line x1="170" y1="178" x2="170" y2="210" stroke="#000" strokeWidth="3" strokeLinecap="round" />
    {/* Hooves */}
    <ellipse cx="110" cy="213" rx="5" ry="3" fill="#000" />
    <ellipse cx="130" cy="213" rx="5" ry="3" fill="#000" />
    <ellipse cx="150" cy="213" rx="5" ry="3" fill="#000" />
    <ellipse cx="170" cy="213" rx="5" ry="3" fill="#000" />
  </svg>
);

export default PopponSvg;
