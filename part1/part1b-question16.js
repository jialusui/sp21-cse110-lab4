let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2

};
for (pro in statistics){
    if (pro[0] == 'r' || statistics[pro]%2 != 0){
        console.log(statistics[pro])
    }

}
