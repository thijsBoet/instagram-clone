const React = require('react');
const whyDidYouRender = require('@welldone-software/why-did-you-render');

whyDidYouRender(React, {
	trackAllPureComponents: true,
});
