// This project will provide the user with a randomly generated message everytime they execute the code

const randomGeneratedNumber = num => {
    return Math.floor(Math.random() * num)
}

const collectiveMotivation = {
    mood: ['motivated', 'excited', 'ambitious', 'determined'],
    motivationalPhrase: ['You can do this', 'You\'re the best', 'Do not give up!', 'Show them what you\'re made of', 'Never back down!', 'Keep Trying!'],
    advice: ['Take it easy', 'Keep pushing yourself', 'Just do it', 'Be optimistic!']
}

let personalMotivation = []

for(let prop in collectiveMotivation) {
    let optionIdx = randomGeneratedNumber(collectiveMotivation[prop].length)

    switch(prop) {
        case 'mood':
            personalMotivation.push(`Your mood right now should be "${collectiveMotivation[prop][optionIdx]}".`)
            break
        case 'motivationalPhrase':
            personalMotivation.push(`Your motivational phrase for today is "${collectiveMotivation[prop][optionIdx]}".`)
            break
        case 'advice':
            personalMotivation.push(`Our advice for today is "${collectiveMotivation[prop][optionIdx]}".`)
            break
        default:
            personalMotivation.push('Not enough info I\'m afraid.')


    }
}

const formatMotivation = motivation => {
    const formatted = personalMotivation.join('\n')
    console.log(formatted)
}

formatMotivation(personalMotivation);