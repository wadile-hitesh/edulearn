
export default function Image({className = '', src="", altText = "testImage", ...props}) {
  return (
    <img className={className} src={src} alt={altText} {...props} loading="lazy"/>
  )
}
