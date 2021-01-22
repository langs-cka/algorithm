function solution(clothes) {
    const objClothes = {};
    clothes.forEach(cloth => {
        const kind = cloth[1];
        objClothes[kind] = objClothes[kind] ? objClothes[kind] + 1 : 1; 
    });
    
    return Object.values(objClothes).reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}