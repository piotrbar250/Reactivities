export interface Duck{
    name: string,
    numLegs: number,
    makeQuack: () => void
}

const duck1: Duck = {
    name: 'Huey',
    numLegs: 2,
    makeQuack: () => console.log('quack')
}

const duck2: Duck = {
    name: 'Duey',
    numLegs: 2,
    makeQuack: () => console.log('quack')
}

export const ducks = [duck1, duck2]