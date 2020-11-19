import LootBox from './lootbox'
import pool from './pool'

const lootbox = new LootBox(pool)

console.log('getPool: ', lootbox.getPool())
console.log('getRarity: ', lootbox.getRarity('ultra'))
console.log('choiceRarity: ', lootbox.choiceRarity())
console.log('choicePrize: ', lootbox.choicePrize(lootbox.getRarity('ultra')))
console.log('open: ', lootbox.open())
console.log('openPack: ', lootbox.openPack(10, 'super'))
