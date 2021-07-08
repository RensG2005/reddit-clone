import ContentLoader from 'react-content-loader'

const Loader = () => (
    <ContentLoader 
    speed={10}
    width={1000}
    height={400}
    viewBox="0 0 1000 400"
    backgroundColor="#939393"
    foregroundColor="#1c3b1b"
  >
    <rect x="132" y="20" rx="3" ry="3" width="288" height="10" /> 
    <rect x="132" y="50" rx="3" ry="3" width="288" height="10" /> 
    <rect x="11" y="110" rx="3" ry="3" width="600" height="97" /> 
    <circle cx="50" cy="50" r="48" /> 
  </ContentLoader>
  )

export default Loader