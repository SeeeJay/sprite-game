input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.LogoUp, function () {
    player.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.TiltRight, function () {
    player.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    player.change(LedSpriteProperty.Y, -1)
})
let player: game.LedSprite = null
basic.showIcon(IconNames.Heart)
player = game.createSprite(2, 2)
let enemy = game.createSprite(0, 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        enemy.delete()
        enemy = game.createSprite(randint(0, 5), randint(0, 3))
    }
})
