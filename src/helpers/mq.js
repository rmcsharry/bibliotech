// REF: https://dev.to/bidah/better-reusable-media-queries-on-emotion---4dkk

// A function to allow using names for breakpoints in emotion media queries
// Requires passing in the name of the breakpoint (sm, md etc)

export function mq(bp_name) {
  const breakpoints = {
    sm: 550,
    md: 768,
    lg: 1024,
    xl: 1700,
  }
  const bpArray = Object.keys(breakpoints).map(key => [key, breakpoints[key]])

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (bp_name === name) return [...acc, `@media (min-width: ${size}px)`]
    return acc
  }, [])

  return result
}
