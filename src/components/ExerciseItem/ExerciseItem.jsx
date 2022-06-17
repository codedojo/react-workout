import React, { useRef, useState, useEffect } from 'react';
//import PropTypes from 'prop-types';

import Button from '../Button';
import ExerciseSetItem from '../ExerciseSetItem';

export default function ExerciseItem({
    exercise,

    onUpdate,
    onDelete,
    onAddSet,
    onUpdateSet,
    onDeleteSet
}) {
    const inputRef = useRef();
    const [isEditing, setEditing] = useState(false);
    const [isAddingSet, setAddingSet] = useState(false);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    function handleSubmit(event) {
        event.preventDefault();

        onUpdate(exercise.id, { title: inputRef.current.value });

        setEditing(false);
    }

    function handleDelete(event) {
        event.stopPropagation();

        onDelete(exercise.id);
    }

    function handleEdit() {
        setEditing(true);
    }

    function handleAddSet() {
        onAddSet(exercise.id);
    }

    function handleUpdateSet(setId, data) {
        onUpdateSet(exercise.id, setId, data);
    }

    function handleDeleteSet(setId) {
        onDeleteSet(exercise.id, setId);
    }

    return isEditing ?
        (
            <div className="exercise-item">
                <form className="exercise-item-form" onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        type="text"
                        defaultValue={exercise.title}
                    />

                    <Button
                        type="submit"
                        icon="check"
                    />

                    <Button
                        type="button"
                        icon="close"
                        onClick={() => setEditing(false)}
                    />
                </form>
            </div>
        )
        :
        (
            <div className="exercise-item">
                <div className="exercise-details">
                    <div className="exercise-title">
                        {exercise.title}
                    </div>

                    <div className="buttons">
                        <Button
                            icon="add"
                            title="Добавить подход"
                            onClick={handleAddSet}
                        />

                        <Button
                            icon="edit"
                            title="Редактировать"
                            onClick={handleEdit}
                        />

                        <Button
                            icon="delete"
                            title="Удалить"
                            onClick={handleDelete}
                        />
                    </div>
                </div>

                {exercise.sets.length > 0 &&
                    <ul className="exercise-set-list">
                        {exercise.sets.map((set, index) =>
                            <ExerciseSetItem
                                key={set.id}
                                set={set}
                                number={index + 1}
                                onUpdate={handleUpdateSet}
                                onDelete={handleDeleteSet}
                            />
                        )}
                    </ul>
                }
            </div>
        );
}

// Exercise.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     onDelete: PropTypes.func.isRequired,
//     onToggle: PropTypes.func.isRequired,
//     onEdit: PropTypes.func.isRequired
// };