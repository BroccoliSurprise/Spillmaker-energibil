namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const mål = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Drivstoff, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 500)
    info.changeLifeBy(5)
    if (info.life() > 100) {
        info.setLife(100)
    }
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mål, function (sprite, otherSprite) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-10)
})
