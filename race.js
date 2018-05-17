function race(v1, v2, g) {
    console.log(v2-v1);
    console.log(g/(v2-v1));
    return g / (v2-v1);
}

console.log(race(80, 91, 37));
console.log(race(80, 100, 40));