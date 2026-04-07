import { useEffect, useState } from 'react'

const cache = new Map()

function processImage(src, threshold) {
  const key = `${src}__${threshold}`
  if (cache.has(key)) return cache.get(key)

  const promise = new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0)
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const brightness = Math.max(data[i], data[i + 1], data[i + 2])
        if (brightness < threshold) {
          data[i + 3] = 0
        } else if (brightness < threshold * 2) {
          const alpha = ((brightness - threshold) / threshold) * 255
          data[i + 3] = Math.min(data[i + 3], Math.round(alpha))
        }
      }

      ctx.putImageData(imageData, 0, 0)
      resolve(canvas.toDataURL('image/png'))
    }
    img.src = src
  })

  cache.set(key, promise)
  return promise
}

export default function TransparentImage({ src, className = '', style = {}, threshold = 60, ...rest }) {
  const [dataUrl, setDataUrl] = useState(null)

  useEffect(() => {
    let cancelled = false
    processImage(src, threshold).then((url) => {
      if (!cancelled) setDataUrl(url)
    })
    return () => { cancelled = true }
  }, [src, threshold])

  if (!dataUrl) return null

  return (
    <img
      src={dataUrl}
      className={className}
      style={style}
      draggable={false}
      {...rest}
    />
  )
}
