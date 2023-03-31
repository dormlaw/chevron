import print from './colorizer.js';

function fancyWelcome() {
  print('');
  print('#yellow[                      oooo]');
  print('#yellow[Yb                    `888]');
  print('#yellow[ `Yb         .ooooo.   888 .oo.    .ooooo.  oooo    ooo oooo d8b  .ooooo.  ooo. .oo.]');
  print('#yellow[   `Yb      d88\' `"Y8  888P"Y88b  d88\' `88b  `88.  .8\'  `888""8P d88\' `88b `888P"Y88b]');
  print('#yellow[   .dP      888        888   888  888ooo888   `88..8\'    888     888   888  888   888]');
  print('#yellow[ .dP        888   .o8  888   888  888    .o    `888\'     888     888   888  888   888]');
  print('#yellow[dP          `Y8bod8P\' o888o o888o `Y8bod8P\'     `8\'     d888b    `Y8bod8P\' o888o o888o]');
  print('');
  print(' Educational project CLI application');
  print(` #c[Initialised at ${new Date().toLocaleDateString('ru-RU')}]`);
}

export default fancyWelcome;
