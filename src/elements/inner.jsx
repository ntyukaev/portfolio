/** @jsx jsx */
import { jsx } from 'theme-ui'
import PropTypes from 'prop-types'

const Inner = ({ className = '', children }) => (
  <div
    sx={{
      width: ['full', 'full', 'full', 'full', 'full', '2/3'],
      textAlign: 'left',
      h1: {
        fontSize: '2.5rem'
      }
    }}
    className={className}
  >
    {children}
  </div>
)

Inner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Inner
