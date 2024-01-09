# Spillmaker - Energibil

## Velkommen til Spillmaker! 
I dag skal vi lage et bilspill. Følg stegene i denne veiledningen for å komme i gang.
Når du er ferdig med veiledningen kan du bygge videre på spillet, eller lage en QR-kode til spillet som du kan åpne på telefonen din og ta med hjem.


## Test
Vi har gjort klar litt kode for deg. Trykk på spillet for å teste det litt.

## Tilfeldig plassering
Litt tilfeldigheter gjør spillet mer spennende.
La oss gjøre det slik at bilen starter på et tilfeldig sted.

Hent en **place mySprite on top of random**-blokk fra Scene-menyen, og legg den inn nederst i programmet.

Husk at du kan trykke på lyspære-knappen for å se fasit.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)


```



## Utforsk kartet (tilemap)
Huset **("hjem")** skal bli stedet du må kjøre til for å vinne spillet.

Hvis du klikker på **tilemap-** og beveger musen over kartet, står koordinatene du peker på nederst på skjermen.

Velg ut et sted på kartet du vil at huset skal være, og noter deg koordinatene (f.eks. "31, 27)"

## Plasser huset

Hent en **"place mySprite on top of tilemap col 0 row 0"**, og plasser den nederst i programmet.
Klikk på** "mySprite" **i denne nye blokken, og endre til **"hjem".**

Klikk på tallene og bytt ut med koordinatene du har lyst til.



```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(31, 27))

```


## Lag nye sprites

Verdenen vår er ganske øde, nå skal vi begynne å fylle den med ting.

Vi begynner med å lage en ny type Sprite som vi etterhvert skal få poeng for å plukke opp. 

Hent en** "set mySprite2 to sprite of kind Player"**-blokk fra** Sprite**-menyen og legg inn i programmet.

Du kan trykke på den grå firkanten for å tegne den slik du vil eller finne en du liker i galleriet.




```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))

mySprite2 = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Player)

```




## Lag et bra navn

Gi den nye Spriten gjerne et bedre navn enn mySprite2, f.eks. **"kraft"**, eller noe som matcher tegningen du har valgt.
Trykk også på den hvite pilen der det står **Player **og skift til** Drivstoff**-typen.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))

kraft = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Drivstoff)

```



## Repeat-blokken

Finn en **repeat**-blokk i **loop**-menyen, og legg den inn i programmet slik at den gaper rundt drivstoff-spriten.
Sett den til å gjenta 100 ganger.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
kraft = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .......22...22......
        ......2322.2222.....
        ......232222222.....
        ......222222222.....
        .......22222b2......
        ........222b2.......
        .........222........
        ..........2.........
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `, SpriteKind.Drivstoff)
}
```



## Plasser sprites utover

Nå har vi 100 drivstoff-sprites, men alle ligger på samme sted.
Legg inn en **place on top of random**-blokk i den grønne løkke-blokken, og skift fra** mySprite** til det du kalte drivstoff-spriten.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}
```

## Sprites reagerer på hverandre

Nå skal vi programmere at det skjer noe når du kjører over en Drivstoff-sprite.

Hent en **on sprite of kind player overlaps...**-blokk i Sprite-menyen, og legg den et sted i programmet ditt utenfor on start. (Over, under, til siden eller hvor som helst.)


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {

})

```


## Velg riktig type Sprite

I Overlap-blokken du nettop laget må du stille den inn slik at den sjekker om en **Player**-sprite berører en** Drivstoff**-sprite. 
Trykk på den hvite pilen i den høyre ovalen for å bytte.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Drivstoff, function (sprite, otherSprite) {

})

```


## Poeng 

Vi vil ha poeng når vi berører en Drivstoff-sprite. Hent en **change score-blokk** fra** Info**-menyen.


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Drivstoff, function (sprite, otherSprite) {
info.changeScoreBy(1)
})

```




## Fjern Sprites 

Vi må også fjerne Drivstoff-spriten når vi får poeng. For å være sikker på at vi kun fjerner den ene som vi tar borti, må vi gjøre to ting.
Først, finn en **destroy mySprite**-blokk og legg inn under **change score**-blokken.
Så må du klikke og dra den røde **otherSprite**-ovalen ut av rammen i **overlap**-blokken, og legge inn i stedet for **mySprite** i **Destroy**-blokken.

(Dette steget er litt vanskelig, spør gjerne Viteverten om hjelp).




```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Drivstoff, function (sprite, otherSprite) {
info.changeScoreBy(1)
sprites.destroy(otherSprite)
})

```


## En måte å vinne spillet 

Nå skal vi programmere inn at du vinner spillet når du kommer deg hjem.

Lag en ny **overlap**-blokk, og sett den til å gjelde for at du berører en Mål-sprite.
Inni denne kan du legge en **game over: WIN-blokk**


```blocks
namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)

tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)

tiles.placeOnTile(hjem, tiles.getTileLocation(40, 43))
for (let index = 0; index < 100; index++) {
    kraft = sprites.create(img`
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            .......22...22......
            ......2322.2222.....
            ......232222222.....
            ......222222222.....
            .......22222b2......
            ........222b2.......
            .........222........
            ..........2.........
            ....................
            ....................
            ....................
            ....................
            ....................
            ....................
            `, SpriteKind.Drivstoff)
	tiles.placeOnRandomTile(kraft, sprites.castle.tileGrass1)
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.Drivstoff, function (sprite, otherSprite) {
info.changeScoreBy(1)
sprites.destroy(otherSprite)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Mål, function (sprite, otherSprite) {
    game.gameOver(true)
})




```





































































```template

namespace SpriteKind {
    export const Drivstoff = SpriteKind.create()
    export const Mål = SpriteKind.create()
}

scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 b 1 1 1 1 1 1 6 1 . . . 
    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . 
    . 1 6 6 b b b b b b 1 6 6 9 1 . 
    . 1 6 1 d d d d d d d b 6 9 1 1 
    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 
    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 
    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 
    . d d d d d d c d d d c d 1 5 5 
    . d d d d d d c d d c d d d 1 5 
    . d d d d d d c c c d d d d d d 
    . d f f f f d d d d f f f d d d 
    . . f f f f f d d f f f f f d . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)

scene.cameraFollowSprite(mySprite)
let hjem = sprites.create(img`
    ....................e2e22e2e....................
    .................222eee22e2e222.................
    ..............222e22e2e22eee22e222..............
    ...........e22e22eeee2e22e2eeee22e22e...........
    ........eeee22e22e22e2e22e2e22e22e22eeee........
    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
    46622e22e22e22eeecc6666666666cceee22e22e22e22664
    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
    6c622e22eeecc66666cc64444446cc66666cceee22e226c6
    46622e22cc66666cc64444444444446cc66666cc22e22664
    46622cc6666ccc64444444444444444446ccc6666cc22664
    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
    cccccccc6666666cb44444444444444bc6666666cccccccc
    64444444444446c444444444444444444c64444444444446
    66cb444444444cb411111111111111114bc444444444bc66
    666cccccccccccd166666666666666661dccccccccccc666
    6666444444444c116eeeeeeeeeeeeee611c4444444446666
    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
    666edffdffde4c66f4effffffffff4ee66c4edffdffde666
    666edccdccde4c66f4effffffffffeee66c4edccdccde666
    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
    cc66666666664c66e4e44e44e44feeee66c46666666666cc
    .c66444444444c66e4e44e44e44ffffe66c44444444466c.
    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
    ....644444444c66f4e44e44e44e44ee66c444444446....
    .....64eee444c66f4e44e44e44e44ee66c444eee46.....
    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
    `, SpriteKind.Mål)








```

## Ferdig! 

Godt jobbet! Når du trykker på Done-knappen under her kan du få en QR-kode av spillet ditt som du kan åpne på f.eks. telefonen din, slik at du kan spille og kode videre på spillet ditt hjemme.

Hvis du har lyst kan du gjerne bygge videre på spillet og legge inn nye funksjoner, ta en titt på eksemplene vi har på hjemmesiden vår for ideer.






```assetjson

{
  "README.md": " ",
  "assets.json": "",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"6h6yRO9gGTE!/.Wt-O^c\">Player</variable><variable type=\"KIND_SpriteKind\" id=\",?--7df-hyngkFSBpHcg\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"(e}E{XvO-%OE-eqO@.]s\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"P{$)o6O_CgX/jyE?5Za[\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\",wY)^i(x|q1)`t]R5I6O\">Drivstoff</variable><variable type=\"KIND_SpriteKind\" id=\"uVS(ferxo|FJ}(:H|aU(\">Mål</variable><variable id=\"wcyJn*eeJmM+SEL|CmMD\">kraft</variable><variable id=\"du?,~:Ix%pITsV4BlPH+\">hjem</variable><variable id=\"TelHPe9{DfLa[knNvE01\">mySprite</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"gamesetbackgroundcolor\"><value name=\"color\"><shadow type=\"colorindexpicker\"><field name=\"index\">9</field></shadow></value><next><block type=\"set_current_tilemap\"><value name=\"tilemap\"><shadow type=\"tiles_tilemap_editor\"><field name=\"tilemap\">tilemap`vestlandet sånn ca`</field><data>{\"commentRefs\":[],\"fieldData\":{\"tilemap\":\"level1\"}}</data></shadow></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"TelHPe9{DfLa[knNvE01\">mySprite</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n. . . . . . . . . . . . . . . . \n. . . . 1 1 1 1 1 1 1 1 . . . . \n. . . 1 b 1 1 1 1 1 1 6 1 . . . \n. . 1 6 b 1 1 1 1 1 1 6 6 1 . . \n. 1 6 6 b b b b b b 1 6 6 9 1 . \n. 1 6 1 d d d d d d d b 6 9 1 1 \n. 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 \n. 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 \n. d d 9 9 9 d 9 9 9 9 9 d 1 1 1 \n. d d d d d d c d d d c d 1 5 5 \n. d d d d d d c d d c d d d 1 5 \n. d d d d d d c c c d d d d d d \n. d f f f f d d d d f f f d d d \n. . f f f f f d d f f f f f d . \n. . . f f f . . . . f f f f . . \n. . . . . . . . . . . . . . . . \n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":null}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Player</field></shadow></value></block></value><next><block type=\"game_control_sprite\"><mutation xmlns=\"http://www.w3.org/1999/xhtml\" _expanded=\"0\" _input_init=\"true\"></mutation><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"TelHPe9{DfLa[knNvE01\">mySprite</field></block></value><value name=\"vx\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">100</field></shadow></value><value name=\"vy\"><shadow type=\"spriteSpeedPicker\"><field name=\"speed\">100</field></shadow></value><next><block type=\"camerafollow\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\"TelHPe9{DfLa[knNvE01\">mySprite</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"wcyJn*eeJmM+SEL|CmMD\">kraft</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n....................\n....................\n....................\n....................\n....................\n....................\n.......22...22......\n......2322.2222.....\n......232222222.....\n......222222222.....\n.......22222b2......\n........222b2.......\n.........222........\n..........2.........\n....................\n....................\n....................\n....................\n....................\n....................\n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":null}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Drivstoff</field></shadow></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"du?,~:Ix%pITsV4BlPH+\">hjem</field><value name=\"VALUE\"><shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\"><field name=\"NUM\">0</field></shadow><block type=\"spritescreate\"><value name=\"img\"><shadow type=\"screen_image_picker\"><field name=\"img\">img`\n....................e2e22e2e....................\n.................222eee22e2e222.................\n..............222e22e2e22eee22e222..............\n...........e22e22eeee2e22e2eeee22e22e...........\n........eeee22e22e22e2e22e2e22e22e22eeee........\n.....222e22e22eeee22e2e22e2e22eeee22e22e222.....\n...22eeee22e22e22e22eee22eee22e22e22e22eeee22...\n4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4\n6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6\n46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664\n46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664\n4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4\n6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6\n466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664\n46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664\n4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4\n6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6\n46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664\n466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664\n4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4\n6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6\n46622eeee22e22e22eeecc6666cceee22e22e22eeee22664\n46622e22e22e22eeecc6666666666cceee22e22e22e22664\n4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4\n6c622e22eeecc66666cc64444446cc66666cceee22e226c6\n46622e22cc66666cc64444444444446cc66666cc22e22664\n46622cc6666ccc64444444444444444446ccc6666cc22664\n4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4\ncccccccc6666666cb44444444444444bc6666666cccccccc\n64444444444446c444444444444444444c64444444444446\n66cb444444444cb411111111111111114bc444444444bc66\n666cccccccccccd166666666666666661dccccccccccc666\n6666444444444c116eeeeeeeeeeeeee611c4444444446666\n666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666\n666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666\n666eddddddde4c66f4e4effffffe44ee66c4eddddddde666\n666edffdffde4c66f4effffffffff4ee66c4edffdffde666\n666edccdccde4c66f4effffffffffeee66c4edccdccde666\n666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666\nc66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c\nc66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c\ncc66666666664c66e4e44e44e44feeee66c46666666666cc\n.c66444444444c66e4e44e44e44ffffe66c44444444466c.\n..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..\n...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...\n....644444444c66f4e44e44e44e44ee66c444444446....\n.....64eee444c66f4e44e44e44e44ee66c444eee46.....\n......6ccc666c66e4e44e44e44e44ee66c666ccc6......\n`</field><data>{\"commentRefs\":[],\"fieldData\":{\"img\":null}}</data></shadow></value><value name=\"kind\"><shadow type=\"spritekind\"><field name=\"MEMBER\">Mål</field></shadow></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></xml>",
  "main.ts": "namespace SpriteKind {\n    export const Drivstoff = SpriteKind.create()\n    export const Mål = SpriteKind.create()\n}\nscene.setBackgroundColor(9)\ntiles.setCurrentTilemap(tilemap`vestlandet sånn ca`)\nlet mySprite = sprites.create(img`\n    . . . . . . . . . . . . . . . . \n    . . . . 1 1 1 1 1 1 1 1 . . . . \n    . . . 1 b 1 1 1 1 1 1 6 1 . . . \n    . . 1 6 b 1 1 1 1 1 1 6 6 1 . . \n    . 1 6 6 b b b b b b 1 6 6 9 1 . \n    . 1 6 1 d d d d d d d b 6 9 1 1 \n    . 1 1 b 6 6 d 6 6 6 d d 9 9 1 1 \n    . 1 d 6 6 6 d 6 6 6 6 d 1 1 1 1 \n    . d d 9 9 9 d 9 9 9 9 9 d 1 1 1 \n    . d d d d d d c d d d c d 1 5 5 \n    . d d d d d d c d d c d d d 1 5 \n    . d d d d d d c c c d d d d d d \n    . d f f f f d d d d f f f d d d \n    . . f f f f f d d f f f f f d . \n    . . . f f f . . . . f f f f . . \n    . . . . . . . . . . . . . . . . \n    `, SpriteKind.Player)\ncontroller.moveSprite(mySprite)\nscene.cameraFollowSprite(mySprite)\nlet kraft = sprites.create(img`\n    ....................\n    ....................\n    ....................\n    ....................\n    ....................\n    ....................\n    .......22...22......\n    ......2322.2222.....\n    ......232222222.....\n    ......222222222.....\n    .......22222b2......\n    ........222b2.......\n    .........222........\n    ..........2.........\n    ....................\n    ....................\n    ....................\n    ....................\n    ....................\n    ....................\n    `, SpriteKind.Drivstoff)\nlet hjem = sprites.create(img`\n    ....................e2e22e2e....................\n    .................222eee22e2e222.................\n    ..............222e22e2e22eee22e222..............\n    ...........e22e22eeee2e22e2eeee22e22e...........\n    ........eeee22e22e22e2e22e2e22e22e22eeee........\n    .....222e22e22eeee22e2e22e2e22eeee22e22e222.....\n    ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...\n    4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4\n    6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6\n    46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664\n    46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664\n    4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4\n    6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6\n    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664\n    46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664\n    4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4\n    6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6\n    46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664\n    466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664\n    4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4\n    6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6\n    46622eeee22e22e22eeecc6666cceee22e22e22eeee22664\n    46622e22e22e22eeecc6666666666cceee22e22e22e22664\n    4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4\n    6c622e22eeecc66666cc64444446cc66666cceee22e226c6\n    46622e22cc66666cc64444444444446cc66666cc22e22664\n    46622cc6666ccc64444444444444444446ccc6666cc22664\n    4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4\n    cccccccc6666666cb44444444444444bc6666666cccccccc\n    64444444444446c444444444444444444c64444444444446\n    66cb444444444cb411111111111111114bc444444444bc66\n    666cccccccccccd166666666666666661dccccccccccc666\n    6666444444444c116eeeeeeeeeeeeee611c4444444446666\n    666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666\n    666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666\n    666eddddddde4c66f4e4effffffe44ee66c4eddddddde666\n    666edffdffde4c66f4effffffffff4ee66c4edffdffde666\n    666edccdccde4c66f4effffffffffeee66c4edccdccde666\n    666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666\n    c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c\n    c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c\n    cc66666666664c66e4e44e44e44feeee66c46666666666cc\n    .c66444444444c66e4e44e44e44ffffe66c44444444466c.\n    ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..\n    ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...\n    ....644444444c66f4e44e44e44e44ee66c444444446....\n    .....64eee444c66f4e44e44e44e44ee66c444eee46.....\n    ......6ccc666c66e4e44e44e44e44ee66c666ccc6......\n    `, SpriteKind.Mål)\n",
  "pxt.json": "{\n    \"name\": \"Energibil assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.13.55\",\n        \"tag\": \"v1.13.55\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/1b3fc64620f77c6224e58f0d2efa9ce1db21f906\",\n        \"target\": \"1.13.55\",\n        \"pxt\": \"9.3.10\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"level1\": {\n        \"id\": \"level1\",\n        \"mimeType\": \"application/mkcd-tilemap\",\n        \"data\": \"MTA0MDAwNDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAxMDEwMTAxMDEwMTAzMDMwMzAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDMwMTAzMDEwMTAxMDEwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAzMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAzMDMwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAzMDMwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMzAzMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDAwMDAwMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAwMDAwMDAwMDEwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAxMDAwMTAxMDEwMzAxMDEwMTAxMDEwMTAxMDAwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDAwMDAxMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMDAwMDEwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDEwMTAwMDAwMTAxMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDEwMTAxMDMwMTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDIwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMTAxMDEwMzAxMDEwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAwMDAwMDAxMDEwMTAzMDEwMTAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAzMDEwMTAxMDAwMDAwMDEwMTAxMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMDAwMDIwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMTAxMDMwMzAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAzMDMwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDEwMTAxMDAwMTAxMDEwMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDAwMDAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMzAxMDMwMzAxMDEwMzAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAzMDEwMzAxMDEwMTAzMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMzAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMzAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMzAxMDEwMTAxMDEwMDAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMzAzMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAxMDEwMTAxMDMwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMzAxMDMwMTAxMDEwMTAxMDAwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMzAxMDEwMTAxMDEwMDAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDEwMDAwMDEwMTAxMDEwMTAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAzMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDMwMTAxMDEwMTAxMDEwMzAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDEwMTAzMDMwMzAzMDMwMzAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAxMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDEwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAwMDAwMTAxMDEwMTAxMDEwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAxMDAwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDEwMTAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAwMDEwMTAxMDEwMTAxMDMwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDAwMTAxMDEwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDAwMDAxMDEwMTAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMDAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMTAxMDEwMDAwMDEwMTAxMDEwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAzMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAxMDEwMDAwMDEwMTAxMDEwMTAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==\",\n        \"tileset\": [\n            \"myTiles.transparency16\",\n            \"sprites.castle.tileGrass1\",\n            \"sprites.castle.tileGrass2\",\n            \"sprites.castle.tileGrass3\"\n        ],\n        \"displayName\": \"vestlandet sånn ca\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tilemap\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"vestlandet sånn ca\":\n            case \"level1\":return tiles.createTilemap(hex`4000400000000100000000000000000000000000000000000101010101010101010101010100000000000000010101010101010101010101010101010101010101010101000001010100000000000000000000000001000001010101010103030301010101000000000000000101010101010101010101010101010101010101010101010000010101000000000000000000010101010100000001010101010101010101000000000000000000010101010101010101010101010101010101010101010100010101010000000000000000000101010101010000000000010101010101000000000101000000000001010101010101010101010101010101010101010101000001010000000000000000000001010101010101000000000000010101000000000101010100000000010101010101010101010101010103030103010101010000010100000000000000000001010101010101010100000000000000000000000101010101010000000001010101010101010101010101010101030101010100000101000000000000000000000000010101010101010000000000000000000101010101010101000000000101010101010101010101010101010301010101000001010000000000000000000000000001010101010101000000000000000101010101010101010000000000010101010101030101010101010101030101010000010100000000000000000000000000000103010101010101000000000001010101010101010101000000000101010101010103010101010101010301010100000101000000000000000000000000000001010101010101010100000001010103030101010101010100000000010101010101010301010101010101010101000001010100000000000000000000000101010101010101010101000000010101010101010101010101000000000101010101010101030101010101010101010000000101000000000000000000000001010101010101010101010000000101010101010101010101010100000000010101010101010103030101010101010100000001010000000000000000000000000101010303010101010100000001010101010201010101010101010000000101010101010101010303010101010101000000010100000000000000000000010101010103010101010101000000010103030101010101010101010100000000010101010101010101010101010101010000000101000000000000000001010101010101010101010101010000000001010103010101010101010101010000000101010101010101010101010301010100000001010000000000000000010101010101010101010101010000000000010101010101010101010101010101000000010101010101010101010101030101000000010101000000000000000000000000000000010101010100000000010000010101010101010101010101010100000101010101010101010101010101010000000001010000000000000000000000000000000101010101000000000101010001010101010101010101010100000000010101010101010101010101010100000000010101000000000000000000000000000000010101010000000001010101000101010301010101010101000100000001010101010101010101010101000000000101010100000000000000000000000000000101010100000000010101010101010103010101010101000001000000010101010101010101010101010000000001010101000000000000000000000000010101010101000000000101010101010101030101010101010000010000000001010101010101010101010000000001010101010100010000000000000000010101010101010100000001010101010101010301010101010100000101000000000001010101010100000000000000010101030101000100000000000000000001010101010100000000010101010101010103010101010101020001010000000000000000000000000000010000000101010301010001000000000000000000010101010100000000000001010101010101030101010101010101010101000000000000000000000001010100000001010103010100000001010000000000000101010000000000000000010101010101010101010101010101010101010101010101010101010101010101000001010103010101000000010101000000000001000000000000000001010101010101010101010101010101010101010101010101010101010101010101010000010101010101010000000101010100000000000000000001010100000101010101010101010101010101010101010101010101010101010101010101010100000101010101010100000000010101010000000000000101010101010000020000010101010101010101010101010101010101010101010101010101010101000001010101010101000000000101010100000000010101010101010101000001010101010101010101010101010101010101010101010101010101010101010000010101010101010100000000010101000001010101010101010101010101010101010101010101010101010101010101010103010101010101010101010100000101010101010101010000000101010100010101010101010101010101020101030303030101010101010101010101010101030103030101010101010101000001010101010101010101000001010101000101010301010101010101010101010101010303010101010101010101010101030101030101010101010101010000010101010101010101010000010101000001010103010101010101010101010101010101010301010101030101010101010301030301010301010101010100000001010101010101010101010101010000010101030101010101010101010101010101010103010101030101010101010103010301010103010101010101000000010101030101010101010101010100000001010101010101010101010101010101010101030303030101010101010101010101010101030101010101010000000101010301010101010101010101000000010101010101010101010101010101010101030301010101010101010101010101010101010301010101010100000001010101030101010101010101010000000101010101010101010101010101010101010303010101010101010101010101010101010303010101010000000000010101010301010101010001010000000000010101010101010101010101010101010101010101010101010101030101010101010303010101010100000000000001010101030101010100000000000000000000000101010101010101010101010101010101010101010101010101010101030301030101010101000100000000010101010101010101000000000000000000000000000000010101000101010101010101010101010101010101010101030101010301010101010001000000000101010101010101010000000000010000010101010100000000000101010101010101010101010101010101010101030101010103010101010100000000000000010101010101010100000000010100010101010101010101010101010101010101010101010101010101010103030101010101010301010101000000000000000101010101010101000000010100000101010101010101010101010101010101010101010101010101010101010101010101010103010101010000000000000101010101010101010000000100000001010101010101010101010101010101010101010101010101010101010101010101010101030101010100000000000001010101010101010100000000000000010103030303030303030101010101010101010101010101010101010101010101010101010101010100000100000001010101010101010101000000000000000101030101010101010101010101010101010101010101010101010101010101010101010101010101000001000000010101010101010101010000000000000001010101010101010101010101010101010101010101010101010101010101010101010101010101000000010000000101010101010101010000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010000000100000101010101010000010100000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010000000001000101010101010100000000000000000000000000000101000101010101010101010101010101010101010101010103010101010101010101010100000001010101010101010101010000000000000000000000000001010000010100000101010101010101010101010101010101030101010101010101010100000000010101010101030101010100000000000000000000000000000101000000000000010101010101010101010101010101010101010101010101010100000000010101010101010101010101010000000000000000000000000101010000000000010101010101010101010101010101010101010101010101010101000000000101010101010101010101010101000000000000000000000001010100000000010101010101010101010101010103010101010101010101010101000000000101010100010101010101030101010100000000000000000000000000000001010101010101010101010101010103030101010101010101010101000000000101010101000101010101010101010101010000000000000000000000010001010101010101010101010101010101010101010101010101010101000000000101000101010000010101010101010101010100000000000000000000010101010000000000010101010101010101010101010101010101010101000000000101000001010100000001010101010101010101000000000000000000010101000000000000000001010101010101010101010101010101010101000000000101010001010101000000000101010101010101010100000000000000000001000000000000000000010101010101010101010101010101010101010000000101010000010101010000000001010101010101010101000000000000000000000000000000000000010101010103030101010101010101010101010100000001010000010101010100000000010101010101010101010000000000000000000000000000000001010101010101010101010101010101010101010100000000000000010101010101000000000101010101010101010100000000000000000000000000000000010101010101010101010101010101010101010100000000000000000000000000000000000001010101010101010101000000000000000000000000000000010101010101010101010101010101010101010100000000000000000000000000010100000000000001010101010101000000000000000000000000000000010101010101010101010101010101010101010100000000000000000000000001010101`, img`\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n................................................................\n`, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.castle.tileGrass3], TileScale.Sixteen);\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}

```
