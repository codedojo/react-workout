import { useRef, useState, useEffect } from 'react';

export default function useTimer(initialSeconds, onEnd) {
    const tickRef = useRef();
    const intervalRef = useRef();

    const [seconds, setSeconds] = useState(initialSeconds);
    const [isRunning, setRunning] = useState(false);
    const [isPaused, setPaused] = useState(false);

    useEffect(() => {
        if (tickRef.current) return;

        tickRef.current = function tick() {
            setSeconds(seconds => {
                if (seconds > 0) {
                    const currentSeconds = seconds - 1;

                    return currentSeconds;
                } else {
                    setRunning(false);

                    onEnd();

                    return 0;
                }
            });
        };
    }, [onEnd]);

    useEffect(() => {
        if (isRunning && !isPaused) {
            intervalRef.current = setInterval(tickRef.current, 1000);
        } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, [isRunning, isPaused]);

    return {
        seconds,
        isRunning,
        isPaused,
        setSeconds,
        setRunning,
        setPaused
    };
}