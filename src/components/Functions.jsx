import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => (
    <section className="Functions">
        <Button type="button-long-text" text = "Clear" clickHandler = {onContentClear}/>
        <Button type="button-long-text" text = "&larr;" clickHandler = {onDelete}/>
    </section>
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions