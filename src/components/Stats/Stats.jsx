import React from 'react';
//import PropTypes from 'prop-types';

import { formatEnding } from '../../utils/format';

export default function Stats({ exercises }) {
    const totalWeight = exercises.reduce((total, exercise) =>
        total + exercise.sets.reduce((total, set) =>
            total + (set.weight * set.reps), 0), 0);

    return (
        <div className="stats">
            <p><span className="number">{exercises.length}</span> {formatEnding(exercises.length, ['упражнение', 'упражнения', 'упражнений'])}</p>
            <p><span className="number">{totalWeight}</span> кг.</p>
        </div>
    );
}

// Stats.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired
//     })).isRequired
// };