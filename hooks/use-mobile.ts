import * as React from "react"

export function useIsMobile() {
  return useWidthCutoff(768);
}

export function useWidthCutoff(breakpoint: number) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(document.documentElement.clientWidth < breakpoint)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(document.documentElement.clientWidth < breakpoint)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
