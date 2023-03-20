// Code your solution in this file!
const hq = 42;
let blockNo;
let feetNo;

function distanceFromHqInBlocks(block){
    blockNo = Math.abs(block - hq);
    return blockNo;
}

function distanceFromHqInFeet(block){
    distanceFromHqInBlocks(block);
    feetNo = blockNo * 264;
    return feetNo;
}

function distanceTravelledInFeet(start, destination){
    const inFeet = Math.abs((destination - start)) * 264;
    return inFeet;
}

function calculatesFarePrice(start, destination){
    const fareFeet = Math.abs((destination - start)) * 264;
    let price;
    if(fareFeet <= 400){
        price = 0;
    }
    else if(fareFeet > 400 && fareFeet <= 2000){
        price = (fareFeet - 400) * 0.02;
    }
    else if(fareFeet > 2000 && fareFeet <= 2500){
        price = 25;
    }
    else{
        price = "cannot travel that far";
    }
    return price;
}

distanceFromHqInBlocks(50);
distanceFromHqInFeet(50);
distanceTravelledInFeet(34, 38);
calculatesFarePrice(43, 44);