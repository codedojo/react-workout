import React, { useState } from 'react';

import Button from '../Button';

export default function ExerciseSetItem({
    set,
    number,
    onUpdate,
    onDelete
}) {
    const [weight, setWeight] = useState(set.weight);
    const [reps, setReps] = useState(set.reps);
    const [isEditing, setEditing] = useState(!weight && !reps);

    function handleSubmit(event) {
        event.preventDefault();

        onUpdate(set.id, { weight, reps });
        setEditing(false);
    }

    function handleWeightChange({ target: { value } }) {
        setWeight(Number(value));
    }

    function handleRepsChange({ target: { value } }) {
        setReps(Number(value));
    }

    return (
        <li className="exercise-set-item">
            {isEditing ?
                <form className="exercise-set-form" onSubmit={handleSubmit}>
                    <input
                        type="number"
                        value={weight || false}
                        min="0"
                        step="0.25"
                        placeholder="Вес"
                        onChange={handleWeightChange}
                    />

                    <input
                        type="number"
                        value={reps || false}
                        min="0"
                        placeholder="Количество повторений"
                        onChange={handleRepsChange}
                    />

                    <div className="buttons">
                        <Button
                            type="submit"
                            icon="check"
                        />

                        <Button
                            type="button"
                            icon="close"
                            onClick={() => setEditing(false)}
                        />
                    </div>
                </form>
                :
                <div className="exercise-set-details">
                    <span className="set-number">{number}</span>

                    {weight > 0 &&
                        <span>{set.weight}&nbsp;&times;&nbsp;</span>
                    }

                    <span>{set.reps || 0}</span>

                    <div className="buttons">
                        <Button
                            className="edit"
                            icon="edit"
                            onClick={() => setEditing(true)}
                        />

                        <Button
                            className="delete"
                            icon="delete"
                            onClick={() => onDelete(set.id)}
                        />
                    </div>
                </div>
            }
        </li>
    );
}