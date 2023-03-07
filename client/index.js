const axios = require('axios')
const niceList = require('../utils/niceList.json')
const MerkleTree = require('../utils/MerkleTree')

const serverUrl = 'http://localhost:1225'

async function main() {
  const person = process.argv.slice(1).join(' ')
  const tree = new MerkleTree(niceList)

  const proof = tree.getProof(niceList.indexOf(person))

  const { data: gift } = await axios.post(`${ serverUrl }/gift`, {
    person,
    proof,
  })

  console.log({ gift })
}

main()