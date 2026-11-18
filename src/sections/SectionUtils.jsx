import React from 'react'

export function RovixMark({ className = 'w-6 h-6', color = 'currentColor' }) {
  return (
    <svg
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="2" y="2" width="8" height="8" rx="1" fill={color} />
      <rect x="2" y="18" width="8" height="8" rx="1" fill={color} />
      <rect x="10" y="10" width="8" height="8" rx="1" fill={color} />
      <rect x="18" y="2" width="16" height="8" rx="1" fill={color} />
      <rect x="18" y="18" width="16" height="8" rx="1" fill={color} />
    </svg>
  )
}
