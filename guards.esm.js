
var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Cart_possibleTypes = ['Cart']
export var isCart = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCart"')
  return Cart_possibleTypes.includes(obj.__typename)
}



var Currency_possibleTypes = ['Currency']
export var isCurrency = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



var CartItem_possibleTypes = ['CartItem']
export var isCartItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCartItem"')
  return CartItem_possibleTypes.includes(obj.__typename)
}



var Money_possibleTypes = ['Money']
export var isMoney = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMoney"')
  return Money_possibleTypes.includes(obj.__typename)
}



var CustomCartAttribute_possibleTypes = ['CustomCartAttribute']
export var isCustomCartAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomCartAttribute"')
  return CustomCartAttribute_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var DeletePayload_possibleTypes = ['DeletePayload']
export var isDeletePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isDeletePayload"')
  return DeletePayload_possibleTypes.includes(obj.__typename)
}



var Order_possibleTypes = ['Order']
export var isOrder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



var Address_possibleTypes = ['Address']
export var isAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isAddress"')
  return Address_possibleTypes.includes(obj.__typename)
}



var OrderItem_possibleTypes = ['OrderItem']
export var isOrderItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderItem"')
  return OrderItem_possibleTypes.includes(obj.__typename)
}



var CustomAttribute_possibleTypes = ['CustomAttribute']
export var isCustomAttribute = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomAttribute"')
  return CustomAttribute_possibleTypes.includes(obj.__typename)
}
