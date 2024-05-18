export type Turtle = {
    id?: number
    code: string
    name?: string
    weight: string
    src?: string
    location?: Location
}

export type Location = {
    longitude: number
    latitude: number
}