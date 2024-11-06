import { motion } from "framer-motion"
import logo from "../../../../public/assets/images/common/logo.svg"
import CustomLink from "../../miscellaneous/CustomLink.tsx"
import { BRAND_URL, BRAND_NAME } from "../../../js/global-variables.ts"

const Header = () => {
  return (
    <motion.header
      className='integration-message absolute top-[60px] flex items-center justify-center flex-col w-full text-center z-10'
      initial={{ opacity: 0, y: "-10rem" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.3, ease: [0.42, 0, 0.58, 1] }}
    >
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
    </motion.header>
  )
}

export default Header
