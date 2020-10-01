
var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Cart_possibleTypes = ['Cart']
module.exports.isCart = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCart"')
  return Cart_possibleTypes.includes(obj.__typename)
}



var Currency_possibleTypes = ['Currency']
module.exports.isCurrency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



var CartItem_possibleTypes = ['CartItem']
module.exports.isCartItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartItem"')
  return CartItem_possibleTypes.includes(obj.__typename)
}



var Money_possibleTypes = ['Money']
module.exports.isMoney = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoney"')
  return Money_possibleTypes.includes(obj.__typename)
}



var CustomCartAttribute_possibleTypes = ['CustomCartAttribute']
module.exports.isCustomCartAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomCartAttribute"')
  return CustomCartAttribute_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var DeletePayload_possibleTypes = ['DeletePayload']
module.exports.isDeletePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePayload"')
  return DeletePayload_possibleTypes.includes(obj.__typename)
}



var Order_possibleTypes = ['Order']
module.exports.isOrder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



var Address_possibleTypes = ['Address']
module.exports.isAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddress"')
  return Address_possibleTypes.includes(obj.__typename)
}



var OrderItem_possibleTypes = ['OrderItem']
module.exports.isOrderItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderItem"')
  return OrderItem_possibleTypes.includes(obj.__typename)
}



var CustomAttribute_possibleTypes = ['CustomAttribute']
module.exports.isCustomAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomAttribute"')
  return CustomAttribute_possibleTypes.includes(obj.__typename)
}
