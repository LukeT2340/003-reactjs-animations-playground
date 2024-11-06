import logo from "../../../../public/assets/images/common/logo.svg"
import CustomLink from "../../miscellaneous/CustomLink.tsx"
import { BRAND_URL, BRAND_NAME } from "../../../js/global-variables.ts"

const Footer = () => {
  return (
    <footer className='integration-message absolute bottom-[60px] flex items-center justify-center flex-col w-full text-center z-10'>
      <h3 className='integration-text text-white font-lato text-[9px] font-medium leading-none m-0 pb-[12px] uppercase'>
        Advertising feature{" "}
        <span className='reader-only'>{`sponsored by ${BRAND_NAME}`}</span>
      </h3>
      <CustomLink href={BRAND_URL} className='integration-logo group'>
        <img
          src={logo}
          alt={`${BRAND_NAME} logo`}
          className='group-hover:scale-110 transition-all duration-200 ease-out'
        />
      </CustomLink>
    </footer>
  )
}

export default Footer
