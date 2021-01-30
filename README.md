# Cheems
A package that let's you scrape Cheems memes from Reddit.

# Installation
`1. Install NPM and Node.js`  
####
`2. Type "npm i cheems"`

# Docs
**[Function: cheem]** - Returns `Promise<CheemsData>`  
####
Read the example for an example of CheemsData.

# Example
```js
const cheems = require('cheems');
cheems.cheem().then(console.log /* Return CheemsData */).catch(console.error);
// CheemsData Example
{
  postLink: 'https://redd.it/i60m2h',
  subreddit: 'cheemslove',
  title: 'Cheems loves Grandpa',
  url: 'https://i.redd.it/3t46mv8pnsf51.jpg',
  nsfw: false,
  spoiler: false,
  author: 'PokeEyeMaury',
  ups: 84,
  preview: [
    'https://preview.redd.it/3t46mv8pnsf51.jpg?width=108&crop=smart&auto=webp&s=ffe03d0a72d8c5f339276a10ad78f173ed698a8e',
    'https://preview.redd.it/3t46mv8pnsf51.jpg?width=216&crop=smart&auto=webp&s=981f6d85a45485875d02a15dad1c52fcd5661ec9',
    'https://preview.redd.it/3t46mv8pnsf51.jpg?width=320&crop=smart&auto=webp&s=6a246df9f6b1748728f28b0848ba5be14b9f80a5',
    'https://preview.redd.it/3t46mv8pnsf51.jpg?width=640&crop=smart&auto=webp&s=5c21c170fdfd8a769a8749184a6ba51fe8ef8fbb'
  ]
}
```