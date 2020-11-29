/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './static/style/styles.css'
import './static/style/menu.css'
import 'react-image-lightbox/style.css'

export const shouldUpdateScroll = ({
  routerProps: { location, },
  getSavedScrollPosition,
}) => {
  const currentPosition = getSavedScrollPosition(location)

  // Don't update scroll position on certain pages
  if (location.pathname.startsWith('/for-sale')) {
    return false
  }

  window.scrollTo(...(currentPosition || [0, 0,]))
}