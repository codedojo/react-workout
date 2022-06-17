import React, { useReducer, useCallback } from 'react';

import { initialState, reducer } from './state';

import ExerciseList from './components/ExerciseList';
import ExerciseForm from './components/ExerciseForm';
import Stats from './components/Stats';
import Timer from './components/Timer';

import './App.css';

export default function App({ title, audioSrc }) {
    const [{ exercises }, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = useCallback(title => {
        dispatch({ type: 'ADD_EXERCISE', title });
    }, []);

    const handleUpdateExercise = useCallback((exerciseId, data) => {
        dispatch({ type: 'UPDATE_EXERCISE', exerciseId, data });
    }, []);

    const handleDeleteExercise = useCallback(exerciseId => {
        dispatch({ type: 'DELETE_EXERCISE', exerciseId });
    }, []);

    const handleAddSet = useCallback(exerciseId => {
        dispatch({ type: 'ADD_SET', exerciseId });
    }, []);

    const handleUpdateSet = useCallback((exerciseId, setId, data) => {
        dispatch({ type: 'UPDATE_SET', exerciseId, setId, data });
    }, []);

    const handleDeleteSet = useCallback((exerciseId, setId) => {
        dispatch({ type: 'DELETE_SET', exerciseId, setId });
    }, []);

    return (
        <div className="app">
            <header>
                <h1>{title}</h1>
                <Stats exercises={exercises} />
                <Timer audioSrc={audioSrc} />
            </header>

            <main>
                <ExerciseList
                    exercises={exercises}
                    onUpdateExercise={handleUpdateExercise}
                    onDeleteExercise={handleDeleteExercise}
                    onAddSet={handleAddSet}
                    onUpdateSet={handleUpdateSet}
                    onDeleteSet={handleDeleteSet}
                />
            </main>

            <footer>
                <ExerciseForm
                    onSubmit={handleSubmit}
                />
            </footer>
        </div>
    );
}