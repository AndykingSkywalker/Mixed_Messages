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