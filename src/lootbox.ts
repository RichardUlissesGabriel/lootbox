export interface item {
  id: string,
  label: string,
  chance: number,
  labelChance?: string
}

export interface rarity {
  label: string,
  id: string,
  chance: number,
  labelChance?: string,
  items: item[]
}

export default class LootBox {
  pool: rarity[]
  constructor (pool:rarity[]) {
    this.pool = pool.sort((rarityA, rarityB) => rarityA.chance - rarityB.chance)
    this.pool.forEach(rarity => {
      rarity.items.sort((itemA, itemB) => itemA.chance - itemB.chance)
    })
  }

  getPool (): rarity[] {
    return this.pool
  }

  getRarity (idRarity: string): rarity {
    return this.pool.filter(rarity => rarity.id === idRarity)[0]
  }

  choiceRarity (): rarity {
    return this.pool.filter(choice => choice.chance >= Math.random())[0]
  }

  choicePrize (rarity: rarity): item {
    return rarity.items.filter(choice => choice.chance >= Math.random())[0]
  }

  open (): item {
    return this.choicePrize(this.choiceRarity())
  }

  openPack (packSize: Number, bonusItemRarity?: string): item[] {
    const prize: item[] = []
    for (let i = 0; i < packSize; ++i) {
      prize.push(this.open())
    }
    if (bonusItemRarity) {
      prize.push(this.choicePrize(this.getRarity(bonusItemRarity)))
    }
    return prize
  }
}
