export class Location {
  constructor(location) {
    this.id = location.id;
    this.dimension = location.dimension;
    this.type = location.type;
    this.residents = location.residents;
    this.residentsNumber = this.residents?.length;
  }
}

export class Character {
  constructor(character) {
    if (character) {
      this.id = character.id;
      this.image = character.image;
      this.name = character.name;
      this.status = character.status;
      this.species = character.species;
      this.type = character.type;
      this.gender = character.gender;
      this.originName = character.origin?.name;
    }
  }
}

export class Pagination {
  constructor({ count, pages, next, prev }) {
    this.count = count;
    this.pages = pages;
    this.next = next;
    this.prev = prev;
  }
}
