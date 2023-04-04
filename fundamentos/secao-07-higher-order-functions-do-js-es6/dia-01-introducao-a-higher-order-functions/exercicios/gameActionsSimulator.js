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
  return `Dragon -- Dano: ${damage}`;
}

function dmgWarrior() {
  const damage = Math.floor(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength) + (warrior.strength));
  return `Warrior -- Dano: ${damage}`;
}

function dmgMage() {
  if (mage.mana < 15) {
    return 'Não possui mana suficiente';
  } else {
    mage.mana = mage.mana - 15;
    const damage = Math.floor(Math.random() * ((mage.intelligence * 2) - mage.intelligence) + (mage.intelligence));
    return `Mage -- Mana: ${mage.mana} Dano: ${damage}`;
  }
};

console.log(dmgDragon());
console.log(dmgWarrior());
console.log(dmgMage());

// Parte II

