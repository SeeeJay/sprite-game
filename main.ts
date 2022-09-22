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
basic.clearScreen()
let score = 0
basic.pause(500)
player = game.createSprite(2, 2)
let enemy = game.createSprite(0, 2)
basic.forever(function () {
    if (player.isTouching(enemy)) {
        enemy.delete()
        game.addScore(0)
        basic.pause(100)
        score += 1
        basic.showNumber(score)
        enemy = game.createSprite(randint(3, 0), randint(0, 4))
    }
})
