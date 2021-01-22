function solution(bridge_length, weight, truck_weights) {
    let time = 1;
    let bridge = Array(bridge_length - 1).fill(0);
    let firstTruck = truck_weights.shift();
    let totalWeight = firstTruck;
    bridge.unshift(firstTruck);
    
    while(truck_weights.length) {
        totalWeight -= bridge.pop();
        const newTruck = truck_weights[0];
        if (totalWeight + newTruck <= weight) {
            totalWeight += newTruck;
            bridge.unshift(newTruck);
            truck_weights.shift();
        } else {
            bridge.unshift(0);
        }
        time++;
    }
    
    return time + bridge_length;
}