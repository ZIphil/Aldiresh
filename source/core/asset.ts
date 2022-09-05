//

import {
  ImageSource,
  SpriteFont,
  SpriteSheet
} from "excalibur";


export const ASSETS = {
  number: new ImageSource("asset/image/number.png"),
  smallNumber: new ImageSource("asset/image/small-number.png"),
  string: new ImageSource("asset/image/string.png"),
  button: new ImageSource("asset/image/button.png"),
  statusName: new ImageSource("asset/image/status-name.png"),
  statusBackground: new ImageSource("asset/image/status-background.png"),
  statusFrame: new ImageSource("asset/image/status-frame.png"),
  logo: new ImageSource("asset/image/logo.png")
};

export const SPRITE_SHEETS = {
  number: SpriteSheet.fromImageSourceWithSourceViews({
    image: ASSETS.number,
    sourceViews: [
      ...Array.from({length: 13}).map((dummy, index) => ({x: index * 11, y: 0, width: 11, height: 10})),
      {x: 143, y: 0, width: 4, height: 10}
    ]
  }),
  smallNumber: SpriteSheet.fromImageSourceWithSourceViews({
    image: ASSETS.smallNumber,
    sourceViews: [
      ...Array.from({length: 10}).map((dummy, index) => ({x: index * 7, y: 0, width: 7, height: 6})),
      {x: 70, y: 0, width: 2, height: 6}
    ]
  }),
  string: SpriteSheet.fromImageSourceWithSourceViews({
    image: ASSETS.string,
    sourceViews: [
      {x: 0, y: 0, width: 110, height: 10},
      {x: 0, y: 10, width: 63, height: 10},
      {x: 0, y: 20, width: 63, height: 10}
    ]
  }),
  button: SpriteSheet.fromImageSource({
    image: ASSETS.button,
    grid: {rows: 2, columns: 1, spriteWidth: 144, spriteHeight: 18}
  }),
  statusName: SpriteSheet.fromImageSource({
    image: ASSETS.statusName,
    grid: {rows: 12, columns: 1, spriteWidth: 39, spriteHeight: 13}
  })
};

export const SPRITE_FONTS = {
  number: new SpriteFont({
    spriteSheet: SPRITE_SHEETS.number,
    alphabet: "0123456789+-±.",
    spacing: 2
  }),
  smallNumber: new SpriteFont({
    spriteSheet: SPRITE_SHEETS.smallNumber,
    alphabet: "0123456789.",
    spacing: 1
  })
};