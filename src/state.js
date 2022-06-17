export const initialState = {
    exercises: [
        {
            id: Date.now(),
            title: 'Жим штанги лежа',
            sets: []
        },
        {
            id: Date.now() + 1,
            title: 'Жим гантелей лежа',
            sets: []
        }
    ]
};

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD_EXERCISE': {
            const exercise = {
                id: Date.now(),
                title: action.title,
                sets: []
            };

            return {
                ...state,
                exercises: [...state.exercises, exercise]
            };
        }

        case 'UPDATE_EXERCISE':
            return {
                ...state,
                exercises: state.exercises.map(exercise => {
                    if (exercise.id !== action.exerciseId) return exercise;

                    return {
                        ...exercise,
                        ...action.data
                    };
                })
            };

        case 'DELETE_EXERCISE':
            return {
                ...state,
                exercises: state.exercises.filter(exercise => exercise.id !== action.exerciseId)
            };

        case 'ADD_SET': {
            const set = {
                id: Date.now(),
                weight: 0,
                reps: 0
            };

            return {
                ...state,
                exercises: state.exercises.map(exercise => {
                    if (exercise.id !== action.exerciseId) return exercise;

                    return {
                        ...exercise,
                        sets: [
                            ...exercise.sets,
                            set
                        ]
                    };
                })
            };
        }

        case 'UPDATE_SET':
            return {
                ...state,
                exercises: state.exercises.map(exercise => {
                    if (exercise.id !== action.exerciseId) return exercise;

                    return {
                        ...exercise,
                        sets: exercise.sets.map(set => {
                            if (set.id !== action.setId) return set;

                            return {
                                ...set,
                                ...action.data
                            };
                        })
                    };
                })
            };

        case 'DELETE_SET':
            return {
                ...state,
                exercises: state.exercises.map(exercise => {
                    if (exercise.id !== action.exerciseId) return exercise;

                    return {
                        ...exercise,
                        sets: exercise.sets.filter(set => set.id !== action.setId)
                    };
                })
            };

        default:
            return state;
    }
}