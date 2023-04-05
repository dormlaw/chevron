# > chevron

This is a command-line interface (CLI) educational application that includes several features, including a wordle game, a number guessing game, a cypher tool for encryption and decryption, and a TCP chat client/server functionality.

## Installation

App developed under WSL an include Makefile
To install and use this application, follow these steps:

  - Clone this repository to your local machine.
  - Make sure you have Node.js installed.
  - Open a terminal window and navigate to the directory where you cloned this repository.
  - Run the command `make install` to install any dependencies 
    and make the `chevron` command executable and available globally.

## Usage

Once the application is ready, you can enter commands to access its modules:

  - `chevron slovo`: Play the wordle game on russian.
  - `chevron kadabra <text>`: Fix the layout of the given text (switch between Russian and English layout).
  - `chevron pifagor`: Play the number guessing game.
  - `chevron chat=server`: Start a TCP chat server.
  - `chevron chat=client`: Connect to TCP chat as client.
  - `chevron enigma <message>`: Encrypt or decrypt the given message with enigma encryption algorythm.

For further help, use the command `--help`.