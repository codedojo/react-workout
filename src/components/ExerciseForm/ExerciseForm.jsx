import React, { useState } from 'react';
//import PropTypes from 'prop-types';

import Button from '../Button';

export default function ExerciseForm({ onSubmit }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (title) {
            onSubmit(title);
            setTitle('');
        }
    }

    function handleChange(event) {
        setTitle(event.target.value);
    }

    return (
        <form className="exercise-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                placeholder="Название упражнения"
                onChange={handleChange}
            />

            <Button type="submit" disabled={!title}>Добавить</Button>
        </form>
    );
}

// Form.propTypes = {
//     onAdd: PropTypes.func.isRequired
// };