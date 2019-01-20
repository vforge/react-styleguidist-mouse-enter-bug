import React from 'react'

// This fires onMouseOver twice
export default ({ children }) => {
    return <div style={{padding: '20px'}}>{children}</div>;
};

// This fires onMouseOver once
// export default ({ children }) => {
//   return <div>{children}</div>;
// };

// This fires onMouseOver once
// export default ({ children }) => {
//   return children;
// };
