import { srcSet /* srcSetWebp */ } from "../../utils/srcSet"

const Picture = ({ img, alt, className = "" }) => {
  return (
    <picture className={className}>
      {/* <source srcSet={srcSetWebp(img)} type="image/webp" /> */}
      <img src={img} srcSet={srcSet(img)} alt={alt} className={className} />
    </picture>
  )
}

export default Picture
