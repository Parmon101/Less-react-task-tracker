import PropTypes from 'prop-types'
import { useMemo } from 'react'

const Button = ({color, text, onClick}) => {
  const bgc = useMemo(() => (color),[color])
    return (
    <button onClick={onClick} style={{backgroundColor: bgc}}
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
