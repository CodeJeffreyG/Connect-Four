class Player {
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  //Creates token object for player
  //Number of toekns will be represented as num
  //num is an integer, createTokens returns an array.

  createTokens(num) {
    const tokens = [];

    for (let i = 0; i < num; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }

    return tokens;
  }

  //gets all tokens that haven't been dropped
  //returns array of unused token

  get unusedTokens() {
    return this.tokens.filter((token) => !token.dropped);
  }

  //gets the active token by return the first token in the array of unused tokens
  // returns an object in the array of unused tokens

  get activeToken() {
    return this.unusedTokens[0];
  }

  //check if a player has any undropped tokens left.
  //returns a boolean value

  checkTokens() {
    return this.unusedTokens.length == 0 ? false : true;
  }
}
