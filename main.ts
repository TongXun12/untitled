scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level2`)
    scene.setBackgroundColor(7)
    mySprite.setPosition(20, 160)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    tiles.setCurrentTilemap(tilemap`level0`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
let mySprite: Sprite = null
scene.setBackgroundColor(11)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(assets.image`google`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
