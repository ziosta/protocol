const key = require('./key')

const getStoreAddressCustom = async (store, namespace, coverKey) => await store.getAddress(key.getCoverContractKey(namespace, coverKey))
const getReassuranceVaultAddress = async (store) => await store.getAddress(key.toBytes32(key.NS.REASSURANCE_VAULT))
const getVaultAddress = async (store, coverKey) => await store.getAddress(key.encodeKeys(['bytes32', 'bytes32', 'bytes32'], [key.toBytes32(key.NS.CONTRACTS), key.toBytes32(key.NS.COVER_VAULT), coverKey]))

module.exports = {
  getStoreAddressCustom,
  getReassuranceVaultAddress,
  getVaultAddress
}
