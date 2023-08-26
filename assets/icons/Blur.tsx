import * as React from "react"
import type { SVGProps } from "react"
const SvgBlur = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={474}
    height={480}
    fill="none"
    {...props}
  >
    <ellipse
      cx={236.654}
      cy={240.17}
      fill="url(#blur_svg__a)"
      rx={143.827}
      ry={304.382}
      transform="rotate(44.365 236.654 240.17)"
    />
    <defs>
      <radialGradient
        id="blur_svg__a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(0 304.382 -143.827 0 236.654 240.17)"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0E228A" stopOpacity={0.82} />
        <stop offset={1} stopColor="#141C48" stopOpacity={0} />
      </radialGradient>
    </defs>
  </svg>
)
export default SvgBlur
