import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Button = ({color, text, onClick}) => {
  const bgc = useMemo(() => ({backgroundColor:color}),[color])
    return (
    <button onClick={onClick} style={ bgc }
    className='btn'>
        {text}
    </button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
