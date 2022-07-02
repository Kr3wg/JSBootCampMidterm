function betterThanAverage(classScore , finalTestScore) {

    let totalClassScore = 0 ;

    for ( let i = 0 ; i < classScore.length ; i ++ ){
        totalClassScore += classScore[i] ;
    }

    let totalScore = totalClassScore + finalTestScore ;
    let averageScore = Math.floor((totalScore / (classScore.length + 1 ))) ;

    if ( averageScore < finalTestScore) {
        return `your score ${finalTestScore} is greater than class average ${averageScore}`
    } else if(averageScore > finalTestScore) {
        return `your score ${finalTestScore} is lower than class average ${averageScore}`
    } else {
        return `your score ${finalTestScore} is equal to the class average`
    }
}

module.exports = { betterThanAverage };
