const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function dmgDragon() {
  const damage = Math.floor(Math.random() * (dragon.strength - 15) + (15));
  return damage;
  // return `Dragon -- Dano: ${damage}`;
}

function dmgWarrior() {
  const damage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + (warrior.strength));
  return damage;
  // return `Warrior -- Dano: ${damage}`;
}

function dmgMage() {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    mage.mana = mage.mana - 15;
    const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + (mage.intelligence));
    return `${mage.mana} ${damage}`;
  }
};

console.log(dmgDragon());
console.log(dmgWarrior());
console.log(dmgMage());
console.log(dmgMage().split(' '));

// Parte II

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: () => {
    const damage = dmgWarrior();
    dragon.healthPoints = dragon.healthPoints - damage;
    warrior.damage = damage;
  },
  mageTurn: () => {
    const split = (dmgMage()).split(' ');
    const mana = split[0];
    const damage = split[1];
    dragon.healthPoints = dragon.healthPoints - damage;
    mage.damage = damage;
    mage.mana = mana;
  },
  dragonTurn: () => {
    const damage = dmgDragon();
    warrior.healthPoints = warrior.healthPoints - damage;
    mage.healthPoints = mage.healthPoints - damage;
    dragon.damage = damage;
  },
  battleMembers: () => {
    gameActions.warriorTurn();
    gameActions.mageTurn();
    gameActions.dragonTurn();
    console.log(battleMembers);
  }
};

gameActions.battleMembers();
gameActions.battleMembers();
gameActions.battleMembers();
gameActions.battleMembers();
gameActions.battleMembers();
// gameActions.battleMembers();

