// components/Hero/CityModel.jsx
export default function CityModel() {
    return (
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Base Platform */}
        <rect x="50" y="300" width="300" height="20" fill="#2C3E50" />
        
        {/* Buildings */}
        <g className="buildings">
          {/* Central Building */}
          <rect x="150" y="100" width="100" height="200" fill="#3498DB" />
          <rect x="170" y="120" width="20" height="20" fill="#ECF0F1" />
          <rect x="210" y="120" width="20" height="20" fill="#ECF0F1" />
          
          {/* Left Building */}
          <rect x="50" y="150" width="80" height="150" fill="#2980B9" />
          <rect x="65" y="170" width="15" height="15" fill="#ECF0F1" />
          <rect x="100" y="170" width="15" height="15" fill="#ECF0F1" />
          
          {/* Right Building */}
          <rect x="270" y="200" width="80" height="100" fill="#34495E" />
          <rect x="285" y="220" width="15" height="15" fill="#ECF0F1" />
          <rect x="320" y="220" width="15" height="15" fill="#ECF0F1" />
        </g>
        
        {/* Floating Icons */}
        <g className="floating-elements">
          <circle cx="100" cy="100" r="20" fill="#E74C3C" />
          <circle cx="300" cy="150" r="20" fill="#27AE60" />
          <circle cx="200" cy="50" r="20" fill="#F1C40F" />
        </g>
      </svg>
    )
  }