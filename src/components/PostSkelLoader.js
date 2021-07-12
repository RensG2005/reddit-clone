import ContentLoader from 'react-content-loader';
import React from "react";

const Loader = () => (
  <ContentLoader
    speed={1}
    width={1000}
    height={1000}
    viewBox="0 0 1000 1000"
    backgroundColor="#939393"
    foregroundColor="#1c3b1b"
  >
    <rect x="132" y="20" rx="3" ry="3" width="400" height="10" />
    <rect x="132" y="50" rx="3" ry="3" width="400" height="10" />
    <rect x="11" y="110" rx="3" ry="3" width="1000" height="150" />
    <circle cx="50" cy="50" r="50" />

    <rect x="132" y="320" rx="3" ry="3" width="400" height="10" />
    <rect x="132" y="350" rx="3" ry="3" width="400" height="10" />
    <rect x="11" y="410" rx="3" ry="3" width="1000" height="150" />
    <circle cx="50" cy="350" r="50" />

    <rect x="132" y="620" rx="3" ry="3" width="400" height="10" />
    <rect x="132" y="650" rx="3" ry="3" width="400" height="10" />
    <rect x="11" y="710" rx="3" ry="3" width="1000" height="150" />
    <circle cx="50" cy="650" r="50" />
  </ContentLoader>
);

export default Loader;
