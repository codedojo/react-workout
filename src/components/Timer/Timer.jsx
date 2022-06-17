import React, { useRef, useCallback } from 'react';

import useTimer from '../../hooks/useTimer';
import { formatTime } from '../../utils/format';
import Button from '../Button';

export default function Timer({ audioSrc }) {
    const audioRef = useRef(new Audio(audioSrc));

    const handleEnd = useCallback(() => {
        audioRef.current.play();
    }, []);

    const timer = useTimer(60, handleEnd);

    function handleStart() {
        timer.setRunning(true);
    }

    function handlePause() {
        timer.setPaused(true);
    }

    function handleResume() {
        timer.setPaused(false);
    }

    function handleStop() {
        timer.setSeconds();
        timer.setRunning(false);
        timer.setPaused(false);
        timer.setSeconds(60);
    }

    function handleAddTime() {
        timer.setSeconds(timer.seconds + 30);
    }

    function handleSubtractTime() {
        timer.setSeconds(timer.seconds - 30);
    }

    return (
        <div className="timer">
            <div className="timer-inner">
                <output className="timer-display">{formatTime(timer.seconds)}</output>

                <div className="timer-controls">
                    <Button
                        icon="remove"
                        disabled={timer.seconds <= 30}
                        onClick={handleSubtractTime}
                    />

                    {timer.isPaused ?
                        <>
                            <Button icon="play_arrow" onClick={handleResume} />
                            <Button icon="stop" onClick={handleStop} />
                        </>
                        :
                        (timer.isRunning ?
                            <>
                                <Button icon="pause" onClick={handlePause} />
                                <Button icon="stop" onClick={handleStop} />
                            </>
                            :
                            <Button icon="play_arrow" onClick={handleStart} />
                        )
                    }

                    <Button
                        icon="add"
                        onClick={handleAddTime}
                    />
                </div>
            </div>
        </div>
    );
}