const IOTA = require('iota.lib.js')
const iota = new IOTA()

const seed = "EXAMPLESEEDEXAMPLESEEDEXAMPLESEEDEXAMPLESEEDEXAMPLESEEDEXAMPLESEEDEXAMPLESEED9999" // seed
const searchedAddress = 'KHAKWQYKYCAJNLUMHILEVE99FDYUVRESZMFOPXBERNMOSGEIXCHPXCXJFMGJRBWYFITB9VEJIWKOGZFQK' //known address
const amount = 30 // amount of addresses
const seclvl = 2 // security level can be 1, 2, or 3, Trinity uses 2

//without the options in "iota.api.getNewAddress" addresses are generated deterministically
const options = {
  index: 0,
  security: seclvl,
  total: 1,
  checksum: false
}

async function addressen(amount) {
  for (var j = 0; j < amount; j++) {
    options.index = j;
    let address = iota.api.getNewAddress(seed, options, (err, address) => {
      if (address) {
        return address
      } else {
        throw new Error(err)
      }
    })
    console.log(`Address at index ${j}: ` + address)
    if (address == searchedAddress) {
      console.log("Address found at index " + j)
      break;
    }
  }
}

//run
console.log("Generate adresses from index 0 - " + amount)
addressen(amount)