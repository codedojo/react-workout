import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Button({ icon, className, children, ...props }) {
    const classNames = classnames('button', className, {
        'icon': icon
    });

    return (
        <button className={classNames} {...props}>
            {icon && 
                <i className="material-icons">{icon}</i>
            }

            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};