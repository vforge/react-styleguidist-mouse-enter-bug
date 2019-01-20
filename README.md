# react-styleguidist onMouseEnter bug

## tl;dr
Custom `react-styleguidist` `<Wrapper>` component fires the onMouseEnter twice, but only if it has any `style`. I also was able to reproduced it with a `className` instead.

## Steps

1. Go to https://vforge.github.io/react-styleguidist-mouse-enter-bug/index.html
2. Open browser's console and mouseover the button - you'll see double onMouseEnter in the log
3. While server is still open, edit `Wrapper.js` and change it to any other component.
4. onMouseEnter is fiering only once.

### OR

1. Install dependencies: `$> npm install`
2. Run styleguide server: `$> npm run styleguide`
3. Go to http://localhost:6060/
4. Open browser's console and mouseover the button - you'll see double onMouseEnter in the log
5. While server is still open, edit `Wrapper.js` and change it to any other component.
6. onMouseEnter is fiering only once.
