let nurseries = []

export const useNurseries = () => nurseries.slice()

export const getNurseries = () => fetch("http://localhost:3000/nurseries")
    .then(res => res.json())
    .then(parsedNurseries => nurseries = parsedNurseries)

let flowerNurseries= []

export const useFlowerNurseries = () => flowerNurseries.slice()

export const getFlowerNurseries = () => fetch("http://localhost:3000/flowerNurseries")
    .then(res => res.json())
    .then(parsedFlowerNurseries => flowerNurseries = parsedFlowerNurseries)

let distNurs = []

export const useDistNurs = () => distNurs.slice()

export const getDistNurs = () => fetch("http://localhost:3000/distNurs")
    .then(res => res.json())
    .then(parsedDistNurs => distNurs = parsedDistNurs)

let colors = []

export const useColors = () => colors.slice()

export const getColors = () => fetch("http://localhost:3000/colors")
    .then(res => res.json())
    .then(parsedColors => colors = parsedColors)

        