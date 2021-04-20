
const treeLocation = async (arrayLocation) => {
    const firstBranch = arrayLocation;
    let secondBranch = [...arrayLocation];
    let results = [];
    for (const location of firstBranch) {
        secondBranch.shift();
        for(const [index, value] of secondBranch.entries()){
            let resultEuclidiano = await calculateEuclidiano(location.lat, value.lat, location.lng, value.lng);
            let address = location.address+' & '+value.address;
            results.push({
                route: address,
                distance: resultEuclidiano
            });
        }
    }
    results.sort(function(a, b){
        return a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0;
    });
    return results;
}
const calculateEuclidiano = async (x1, x2, y1, y2 ) => {
    result = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1, 2));
    return result;
}

module.exports = { treeLocation, calculateEuclidiano };