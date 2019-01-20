import React from 'react';

import './Button.css';

export default function Button({ onClick, onMouseEnter, onMouseLeave, children }) {
	return (
		<div
			className="button"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			{children}
		</div>
	);
}

Button.defaultProps = {
	onMouseEnter: () => {},
	onMouseLeave: () => {},
};
