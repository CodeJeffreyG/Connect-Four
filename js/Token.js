class Token {
  constructor(index, owner) {
    this.owner = owner;
    this.id = `token-${index}-${owner.id}`;
    this.dropped = false;
    this.columnLocation = 0;
  }

  //Gets associated htmlToken
  //returns an HTML Element associated with token

  get htmlToken() {
    return document.getElementById(this.id);
  }

  //gets left offset of html element
  get offsetLeft() {
    return this.htmlToken.offsetLeft;
  }

  //draws new HTML token.

  drawHTMLToken() {
    const token = document.createElement("div");
    document.getElementById("game-board-underlay").appendChild(token);
    token.setAttribute("id", this.id);
    token.setAttribute("class", "token");
    token.style.backgroundColor = this.owner.color;
  }

  //Moves html token one column to the left.

  moveLeft() {
    if (this.columnLocation > 0) {
      this.htmlToken.style.left = this.offsetLeft - 76;
      this.columnLocation -= 1;
    }
  }

  //moves html token on column to the right.

  moveRight(columns) {
    if (this.columnLocation < columns - 1) {
      this.htmlToken.style.left = this.offsetLeft + 76;
      this.columnLocation += 1;
    }
  }

  //drops html token into target board space.

  drop(target, reset) {
    this.dropped = true;

    $(this.htmlToken).animate(
      {
        top: target.y * target.diameter,
      },
      750,
      "easeOutBounce",
      reset
    );
  }
}
