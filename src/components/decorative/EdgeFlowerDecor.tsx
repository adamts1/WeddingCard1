import type { CSSProperties } from 'react'

import clusterHorizontalA from '../../../assets/flower-top.png'
import clusterHorizontalB from '../../../assets/flower-bottom.png'
import clusterVerticalA from '../../../assets/flower-top.png'
import clusterVerticalB from '../../../assets/flower-bottom.png'

/** Single decorative flower / cluster (transparent PNG). */
export type FlowerProps = {
  src: string
  className?: string
  animationDelay: string
  animationDuration: string
  /** Pivot for wind motion: bottom-center works well for vertical stems. */
  transformOrigin?: CSSProperties['transformOrigin']
  variant?: 'a' | 'b'
  alt?: string
}

const animationNames = {
  a: 'flower-edge-breeze-a',
  b: 'flower-edge-breeze-b',
} as const

export function Flower({
  src,
  className = '',
  animationDelay,
  animationDuration,
  transformOrigin = '50% 100%',
  variant = 'a',
  alt = '',
}: FlowerProps) {
  const style: CSSProperties = {
    animationName: animationNames[variant],
    animationDuration,
    animationDelay,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    transformOrigin,
  }

  return (
    <img
      src={src}
      alt={alt}
      data-flower-sway=""
      style={style}
      className={`absolute max-w-none select-none will-change-transform ${className}`}
      draggable={false}
    />
  )
}

export type EdgeFlowerConfig = FlowerProps & { id: string }

export type EdgeFlowerDecorProps = {
  flowers: EdgeFlowerConfig[]
  className?: string
}

/**
 * Full-viewport decorative flowers. Each item is its own `<img>` with independent timing.
 * Keyframes: `src/index.css` (`flower-edge-breeze-a` / `flower-edge-breeze-b`).
 */
export default function EdgeFlowerDecor({
  flowers,
  className = '',
}: EdgeFlowerDecorProps) {
  return (
    <div
      className={`pointer-events-none relative h-[100dvh] min-h-screen w-full overflow-x-hidden overflow-y-hidden ${className}`}
      aria-hidden
    >
      {flowers.map((item) => {
        const { id, ...flowerProps } = item
        return <Flower key={id} {...flowerProps} />
      })}
    </div>
  )
}

/**
 * Example layout: right column (vertical grouping) + bottom strip (horizontal grouping).
 * Replace `src` entries with distinct PNGs as you add more clusters.
 */
export const SAMPLE_EDGE_FLOWER_CONFIGS: EdgeFlowerConfig[] = [
  {
    id: 'right-1',
    src: clusterVerticalA,
    className: 'top-[6%] right-[-2%] w-[clamp(5rem,22vw,9.5rem)] opacity-90',
    animationDelay: '0s',
    animationDuration: '5.4s',
    transformOrigin: '70% 100%',
    variant: 'a',
  },
  {
    id: 'right-2',
    src: clusterVerticalB,
    className: 'top-[28%] right-[2%] w-[clamp(4.5rem,18vw,8rem)] opacity-85',
    animationDelay: '0.6s',
    animationDuration: '6.2s',
    transformOrigin: '60% 100%',
    variant: 'b',
  },
  {
    id: 'right-3',
    src: clusterVerticalA,
    className: 'top-[52%] -right-1 w-[clamp(5rem,20vw,8.5rem)] scale-x-[-1] opacity-80',
    animationDelay: '1.1s',
    animationDuration: '5.8s',
    transformOrigin: '55% 100%',
    variant: 'b',
  },
  {
    id: 'right-4',
    src: clusterVerticalB,
    className: 'top-[72%] right-[-4%] w-[clamp(4rem,16vw,7rem)] opacity-75',
    animationDelay: '1.8s',
    animationDuration: '6.6s',
    transformOrigin: '65% 100%',
    variant: 'a',
  },
  {
    id: 'bottom-1',
    src: clusterHorizontalA,
    className: 'bottom-[-3%] left-[4%] w-[clamp(6rem,28vw,11rem)] opacity-90',
    animationDelay: '0.25s',
    animationDuration: '5.1s',
    transformOrigin: '50% 90%',
    variant: 'b',
  },
  {
    id: 'bottom-2',
    src: clusterHorizontalB,
    className: 'bottom-[-2%] left-[32%] w-[clamp(5.5rem,24vw,10rem)] opacity-85',
    animationDelay: '0.95s',
    animationDuration: '6s',
    transformOrigin: '50% 95%',
    variant: 'a',
  },
  {
    id: 'bottom-3',
    src: clusterHorizontalA,
    className: 'bottom-[-4%] left-[58%] w-[clamp(5rem,22vw,9rem)] scale-x-[-1] opacity-80',
    animationDelay: '1.45s',
    animationDuration: '5.6s',
    transformOrigin: '45% 100%',
    variant: 'b',
  },
  {
    id: 'bottom-4',
    src: clusterHorizontalB,
    className: 'bottom-[-2%] right-[-2%] w-[clamp(6rem,26vw,10.5rem)] opacity-85',
    animationDelay: '2s',
    animationDuration: '6.4s',
    transformOrigin: '55% 92%',
    variant: 'a',
  },
]
