import { Turtle } from "../types"

const turtles: Turtle[] = []

export function getTurtles(page: number): Promise<Turtle[]> {
    return Promise.resolve(fakeTurtleGet(page))
}

function fakeTurtleGet(page: number): Turtle[] {
    if (page === 1) return generateTurtles(10)
    if (page === 2) return generateTurtles(5)
    return []
}

function generateTurtles(quantity = 10): Turtle[] {
    for (let i = 0; i < quantity; i += 1) {
        turtles.push(generateTurtle())
    }
    return turtles
}

function generateTurtle() {
    return ({
        id: Math.random(),
        name: 'Turtle name',
        code: Math.random().toString(12).substring(0),
        weight: Math.random().toString(12).substring(0)
    })
}