import { useEffect } from "react"
import LocomotiveScroll from "locomotive-scroll"
// import { useMediaQuery } from 'react-responsive'
import {
  LocomotiveScrollProps,
  IExtendedLocomotiveScrollOptions,
} from "../../types"

const LocomotiveParallax: React.FC<LocomotiveScrollProps> = ({
  locoScrollRef,
  children,
}) => {
  const divRef = locoScrollRef as React.RefObject<HTMLDivElement>

  // const mobile = useMediaQuery({ maxWidth: 1023 })

  // if (mobile) {
  //   return <div>{children}</div>
  // }

  useEffect(() => {
    if (divRef.current) {
      new LocomotiveScroll({
        el: divRef.current,
        smooth: true,
        lerp: 0.02,
        multiplier: 1,
      } as IExtendedLocomotiveScrollOptions)
    }
  }, [divRef])

  return <div ref={divRef}>{children}</div>
}

export default LocomotiveParallax
