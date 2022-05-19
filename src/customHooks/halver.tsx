// This hook will separate a phrase into words, and then divide the words into two groups. It will return an array with two strings.

export default function (phrase: string) {
    const words = phrase.split(' ')
    const half = Math.floor(words.length / 2)
    const firstHalf = words.slice(0, half).join(' ')
    const secondHalf = words.slice(half).join(' ')

    return [firstHalf, secondHalf]
}
