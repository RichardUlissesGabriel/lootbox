# LootBox
Generate loot boxes

# Usage
```js
import LootBox from './lootbox'
import pool from './pool'

const lootbox = new LootBox(pool)
```

# Functions
```ts
// return pool
getPool (): rarity[]
// return a rarity
getRarity (rarityID: string): rarity
// choice a rarity randomly
choiceRarity (): rarity
// choice a item randomly from a specific ratity
choicePrize (rarity: rarity): item
// open one lootbox
open(): item
// open a pack of lootbox, can be passed a bonus item os one rarity
openPack (packSize: Number, bonusItemRarity?: string): item[]
```

# Example Pool Config

```ts
const pool:rarity[] = [
  {
    label: 'Ultra Rare',
    id: 'ultra',
    chance: 0.006,
    labelChance: '0,6%',
    items: [
      {
        id: 'klee',
        label: 'Klee',
        chance: 0.6,
        labelChance: '10%'
      },
      {
        id: 'jean',
        label: 'Jean',
        chance: 0.7,
        labelChance: '10%'
      },
      {
        id: 'mona',
        label: 'Mona',
        chance: 0.8,
        labelChance: '10%'
      },
      {
        id: 'qiqi',
        label: 'Qiqi',
        chance: 0.9,
        labelChance: '10%'
      },
      {
        id: 'venti',
        label: 'Venti',
        chance: 1,
        labelChance: '10%'
      },
      {
        id: 'diluc',
        label: 'Diluc',
        chance: 0.5,
        labelChance: '50%'
      }
    ]
  },
  {
    label: 'Super Rare',
    id: 'super',
    chance: 0.056,
    labelChance: '5%',
    items: [
      {
        id: 'legendary_sword',
        label: 'Legendary Sword',
        chance: 1,
        labelChance: '100%'
      }
    ]
  },
  {
    label: 'Rare',
    id: 'rare',
    chance: 0.156,
    labelChance: '10%',
    items: [
      {
        id: 'rare_sword',
        label: 'Rare Sword',
        chance: 1,
        labelChance: '100%'
      }
    ]
  },
  {
    label: 'Uncommon',
    id: 'uncommon',
    chance: 0.406,
    labelChance: '25%',
    items: [
      {
        id: 'refined_sword',
        label: 'Solid Sword',
        chance: 1,
        labelChance: '100%'
      }
    ]
  },
  {
    label: 'Common',
    id: 'common',
    chance: 1,
    labelChance: '40,4%',
    items: [
      {
        id: 'common_sword',
        label: 'Rusty Sword',
        chance: 1,
        labelChance: '100%'
      }
    ]
  }
]
```
