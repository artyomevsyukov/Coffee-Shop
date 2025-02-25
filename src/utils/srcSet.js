export function srcSet(src) {
  const fileExt = src.split(".").pop()
  const fileBase = src.replace(`.${fileExt}`, "")
  const src2x = `${fileBase}@2x.${fileExt}`
  const src3x = `${fileBase}@3x.${fileExt}`
  //   return src2x
  return `${src} 1x, ${src2x} 2x, ${src3x} 3x`
}

export function srcSetWebp(src) {
  const fileExt = src.split(".").pop()
  const fileBase = src.replace(`.${fileExt}`, "")
  const src2x = `${fileBase}@2x.webp`
  const src3x = `${fileBase}@3x.webp`
  return `${fileBase}.webp 1x, ${src2x} 2x, ${src3x} 3x`
}
