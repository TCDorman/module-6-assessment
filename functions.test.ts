const {shuffleArray, arrCopy} = require('./utils')

describe('shuffleArray should', () => {
    
    shuffleArray('shuffleArray should be an array', () => {
        let shuffledArray = shuffleArray(arrCopy)
        expect(typeof shuffledArray).toBe('array')
    })
   

    arrCopy('shuffleArray should return an array of the same length', () => {
        let shuffledArray = shuffleArray(arrCopy.length)
        expect(shuffledArray.length).toContainEqual(shuffleArray.length)
        
    })

})