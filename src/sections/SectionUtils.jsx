import React from 'react'

export function Logo({ className = 'w-6 h-6', color = '80ED00' }) {
  return (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="36" height="36" className={className}>

  <path fill={color} fill-rule="evenodd" d="M 180 6 H 320 A 175 175 0 0 1 495 181 V 319 A 175 175 0 0 1 320 494 H 180 A 175 175 0 0 1 5 319 V 181 A 175 175 0 0 1 180 6 Z
       M 154 128 H 346 A 98 98 0 0 1 444 226 V 268 A 98 98 0 0 1 346 366 H 154 A 98 98 0 0 1 56 268 V 226 A 98 98 0 0 1 154 128 Z" />

  <circle cx="164" cy="240" r="47" fill={color} />
  <circle cx="336" cy="240" r="47" fill={color} />
</svg>
  )
}
