const sharp = require('sharp');

const sizes = [{ width: 1024, height: 1024 }, { width: 512, height: 512 }];

sizes.map(e => 
    sharp('icon_app.png')
  .resize(e.width, e.height)
  .toFile(`generated/icon_app_${e.width}x${e.height}.png`)
);

