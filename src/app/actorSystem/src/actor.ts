

type Position = {
    x: number
    y: number
}

type Actor = {
    position: Position
}

function move(actor: Actor, position: Position) {
    actor.position = position
}
