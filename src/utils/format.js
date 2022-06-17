export function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
}

export function formatEnding(length, [one, ltFive, gtFive]) {
    if (length === 1) {
        return one;
    } else if (length > 1 && length < 5) {
        return ltFive;
    } else {
        return gtFive;
    }
}