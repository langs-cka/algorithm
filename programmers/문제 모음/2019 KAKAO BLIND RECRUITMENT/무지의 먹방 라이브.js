function solution(food_times, k) {
    food_times = food_times.map((time, i) => ({index: i + 1, time}));
    food_times.sort((a, b) => a.time - b.time);
    
    for (let i = 0, len = food_times.length; i < len; i++) {
        const foodTime = food_times[i];
        const remainLen = len - i;
        const roopTime = (foodTime.time - (i === 0 ? 0 : food_times[i - 1].time)) * remainLen;
        // console.log(roopTime);
        if (k < roopTime) {
            return food_times.slice(i).sort((a, b) => a.index - b.index)[k % remainLen].index;
        }
        k -= roopTime;
    }
    return -1;
}