import {FieldsSelection,Observable} from 'genql-runtime'

export type Scalars = {
    ID: string,
    String: string,
    Int: number,
    Date: any,
    Boolean: boolean,
    Upload: any,
}

export interface Query {
    /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
    cart?: Cart
    __typename?: 'Query'
}

export type CurrencyCode = 'AED' | 'AFN' | 'ALL' | 'AMD' | 'ANG' | 'AOA' | 'ARS' | 'AUD' | 'AWG' | 'AZN' | 'BAM' | 'BBD' | 'BDT' | 'BGN' | 'BHD' | 'BIF' | 'BMD' | 'BND' | 'BOB' | 'BRL' | 'BSD' | 'BTC' | 'BTN' | 'BWP' | 'BYR' | 'BZD' | 'CAD' | 'CDF' | 'CHF' | 'CLP' | 'CNY' | 'COP' | 'CRC' | 'CUC' | 'CUP' | 'CVE' | 'CZK' | 'DJF' | 'DKK' | 'DOP' | 'DZD' | 'EGP' | 'ERN' | 'ETB' | 'EUR' | 'FJD' | 'FKP' | 'GBP' | 'GEL' | 'GHS' | 'GIP' | 'GMD' | 'GNF' | 'GTQ' | 'GYD' | 'HKD' | 'HNL' | 'HRK' | 'HTG' | 'HUF' | 'IDR' | 'ILS' | 'INR' | 'IQD' | 'IRR' | 'ISK' | 'JMD' | 'JOD' | 'JPY' | 'KES' | 'KGS' | 'KHR' | 'KMF' | 'KPW' | 'KRW' | 'KWD' | 'KYD' | 'KZT' | 'LAK' | 'LBP' | 'LKR' | 'LRD' | 'LSL' | 'LYD' | 'MAD' | 'MDL' | 'MGA' | 'MKD' | 'MMK' | 'MNT' | 'MOP' | 'MRO' | 'MTL' | 'MUR' | 'MVR' | 'MWK' | 'MXN' | 'MYR' | 'MZN' | 'NAD' | 'NGN' | 'NIO' | 'NOK' | 'NPR' | 'NZD' | 'OMR' | 'PAB' | 'PEN' | 'PGK' | 'PHP' | 'PKR' | 'PLN' | 'PYG' | 'QAR' | 'RON' | 'RSD' | 'RUB' | 'RWF' | 'SAR' | 'SBD' | 'SCR' | 'SDD' | 'SDG' | 'SEK' | 'SGD' | 'SHP' | 'SLL' | 'SOS' | 'SRD' | 'STD' | 'SVC' | 'SYP' | 'SZL' | 'THB' | 'TJS' | 'TMT' | 'TND' | 'TOP' | 'TRY' | 'TTD' | 'TVD' | 'TWD' | 'TZS' | 'UAH' | 'UGX' | 'USD' | 'UYU' | 'UZS' | 'VEB' | 'VEF' | 'VND' | 'VUV' | 'WST' | 'XAF' | 'XCD' | 'XBT' | 'XOF' | 'XPF' | 'YER' | 'ZAR' | 'ZMW' | 'WON'


/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export interface Cart {
    /** A custom unique identifer for the cart provided by you. */
    id: Scalars['ID']
    /** The current currency details of the cart. */
    currency: Currency
    /** The customer for the cart */
    email?: Scalars['String']
    /** The number of total items in the cart */
    totalItems?: Scalars['Int']
    /** The number of total unique items in the cart. */
    totalUniqueItems?: Scalars['Int']
    /** The items currently in the cart. */
    items: CartItem[]
    /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
    subTotal: Money
    /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
    shippingTotal: Money
    /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
    taxTotal: Money
    /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
    grandTotal: Money
    /** A simple helper method to check if the cart is empty. */
    isEmpty?: Scalars['Boolean']
    /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
    abandoned?: Scalars['Boolean']
    /** Custom key/value attributes array for the cart. */
    attributes: CustomCartAttribute[]
    /** Any notes related to the cart/checkout */
    notes?: Scalars['String']
    /** The date and time the cart was created. */
    createdAt: Scalars['Date']
    /** The date and time the cart was updated. */
    updatedAt: Scalars['Date']
    __typename?: 'Cart'
}


/** Cart and Cart Items use the currency object to format their unit/line totals. */
export interface Currency {
    /** The currency code, e.g. USD, GBP, EUR */
    code?: CurrencyCode
    /** The currency smybol, e.g. $, £, € */
    symbol?: Scalars['String']
    /** The thousand separator, e.g. ',', '.' */
    thousandsSeparator?: Scalars['String']
    /** The decimal separator, e.g. '.' */
    decimalSeparator?: Scalars['String']
    /** The decimal places for the currency */
    decimalDigits?: Scalars['Int']
    __typename?: 'Currency'
}


/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export interface CartItem {
    /** A custom unique identifer for the item provided by you. */
    id: Scalars['ID']
    /** Name for the item. */
    name?: Scalars['String']
    /** Description for the item. */
    description?: Scalars['String']
    /** The type of cart item this is. */
    type: CartItemType
    /** Array of image URLs for the item. */
    images?: (Scalars['String'] | undefined)[]
    /** Unit total for the individual item. */
    unitTotal: Money
    /** Line total (quantity * unit price). */
    lineTotal: Money
    /** Quantity for the item. */
    quantity: Scalars['Int']
    /** Custom key/value attributes array for the item. */
    attributes: CustomCartAttribute[]
    /** The date and time the item was created. */
    createdAt: Scalars['Date']
    /** The date and time the item was updated. */
    updatedAt: Scalars['Date']
    __typename?: 'CartItem'
}


/** Use these enums to group cart items. Cart totals will reflect these enums. */
export type CartItemType = 'SKU' | 'TAX' | 'SHIPPING'


/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export interface Money {
    /** The raw amount in cents/pence */
    amount?: Scalars['Int']
    /** The current currency details of the money amount */
    currency: Currency
    /** The formatted amount with the cart currency. */
    formatted: Scalars['String']
    __typename?: 'Money'
}


/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export interface CustomCartAttribute {
    key: Scalars['String']
    value?: Scalars['String']
    __typename?: 'CustomCartAttribute'
}

export interface Mutation {
    /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
    addItem: Cart
    /** Use this to set all the items at once in the cart. This will override any existing items. */
    setItems: Cart
    /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
    updateItem: Cart
    /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
    incrementItemQuantity: Cart
    /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
    decrementItemQuantity: Cart
    /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
    removeItem: Cart
    /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
    emptyCart: Cart
    /** Use this to update the cart currency or attributes. If the cart doesn't exist, it'll throw an error. */
    updateCart: Cart
    /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
    deleteCart: DeletePayload
    /** Use this to convert a cart to an unpaid order. */
    checkout?: Order
    __typename?: 'Mutation'
}

export interface DeletePayload {
    success: Scalars['Boolean']
    message?: Scalars['String']
    __typename?: 'DeletePayload'
}


/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export interface Order {
    id: Scalars['ID']
    /** The ID of the cart you want to "checkout". */
    cartId: Scalars['ID']
    /** The email of the recipient. Can be used later for cart recovery emails. */
    email: Scalars['String']
    /** The orders shipping address. */
    shipping: Address
    /** The orders billing address. */
    billing: Address
    /** The order items that were in the cart. */
    items: OrderItem[]
    /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
    subTotal: Money
    /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
    shippingTotal: Money
    /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
    taxTotal: Money
    /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
    grandTotal: Money
    /** The total item count. */
    totalItems: Scalars['Int']
    /** The total unique item count. */
    totalUniqueItems: Scalars['Int']
    /** The notes set at checkout. */
    notes?: Scalars['String']
    /** The custom attributes set at checkout */
    attributes: CustomAttribute[]
    /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
    status: OrderStatus
    /** The date and time the order was created. */
    createdAt: Scalars['Date']
    /** The date and time the order status was updated. */
    updatedAt: Scalars['Date']
    __typename?: 'Order'
}


/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export interface Address {
    /** Use this to keep an optional company name for addresses. */
    company?: Scalars['String']
    /** Use this to keep the name of the recipient. */
    name: Scalars['String']
    /** Use this to keep the first line of the address. */
    line1: Scalars['String']
    /** Use this to keep the apartment, door number, etc. */
    line2?: Scalars['String']
    /** Use this to keep the city/town name. */
    city: Scalars['String']
    /** Use this to keep the state/county name. */
    state?: Scalars['String']
    /** Use this to keep the post/postal/zip code. */
    postalCode: Scalars['String']
    /** Use this to keep the country name. */
    country: Scalars['String']
    __typename?: 'Address'
}


/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 * 
 * Order items are identical to the CartItem type.
 */
export interface OrderItem {
    id: Scalars['ID']
    name?: Scalars['String']
    description?: Scalars['String']
    type: CartItemType
    images?: (Scalars['String'] | undefined)[]
    unitTotal: Money
    lineTotal: Money
    quantity: Scalars['Int']
    createdAt: Scalars['Date']
    updatedAt: Scalars['Date']
    attributes: CustomCartAttribute[]
    __typename?: 'OrderItem'
}

export interface CustomAttribute {
    key: Scalars['String']
    value?: Scalars['String']
    __typename?: 'CustomAttribute'
}

export type OrderStatus = 'UNPAID' | 'PAID'

export type CacheControlScope = 'PUBLIC' | 'PRIVATE'

export interface QueryRequest{
    /** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
    cart?: [{id: Scalars['ID'],currency?: (CurrencyInput | null)},CartRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CurrencyInput {code?: (CurrencyCode | null),symbol?: (Scalars['String'] | null),thousandsSeparator?: (Scalars['String'] | null),decimalSeparator?: (Scalars['String'] | null),decimalDigits?: (Scalars['Int'] | null)}


/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export interface CartRequest{
    /** A custom unique identifer for the cart provided by you. */
    id?: boolean | number
    /** The current currency details of the cart. */
    currency?: CurrencyRequest
    /** The customer for the cart */
    email?: boolean | number
    /** The number of total items in the cart */
    totalItems?: boolean | number
    /** The number of total unique items in the cart. */
    totalUniqueItems?: boolean | number
    /** The items currently in the cart. */
    items?: CartItemRequest
    /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
    subTotal?: MoneyRequest
    /** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
    shippingTotal?: MoneyRequest
    /** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
    taxTotal?: MoneyRequest
    /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
    grandTotal?: MoneyRequest
    /** A simple helper method to check if the cart is empty. */
    isEmpty?: boolean | number
    /** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
    abandoned?: boolean | number
    /** Custom key/value attributes array for the cart. */
    attributes?: CustomCartAttributeRequest
    /** Any notes related to the cart/checkout */
    notes?: boolean | number
    /** The date and time the cart was created. */
    createdAt?: boolean | number
    /** The date and time the cart was updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Cart and Cart Items use the currency object to format their unit/line totals. */
export interface CurrencyRequest{
    /** The currency code, e.g. USD, GBP, EUR */
    code?: boolean | number
    /** The currency smybol, e.g. $, £, € */
    symbol?: boolean | number
    /** The thousand separator, e.g. ',', '.' */
    thousandsSeparator?: boolean | number
    /** The decimal separator, e.g. '.' */
    decimalSeparator?: boolean | number
    /** The decimal places for the currency */
    decimalDigits?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export interface CartItemRequest{
    /** A custom unique identifer for the item provided by you. */
    id?: boolean | number
    /** Name for the item. */
    name?: boolean | number
    /** Description for the item. */
    description?: boolean | number
    /** The type of cart item this is. */
    type?: boolean | number
    /** Array of image URLs for the item. */
    images?: boolean | number
    /** Unit total for the individual item. */
    unitTotal?: MoneyRequest
    /** Line total (quantity * unit price). */
    lineTotal?: MoneyRequest
    /** Quantity for the item. */
    quantity?: boolean | number
    /** Custom key/value attributes array for the item. */
    attributes?: CustomCartAttributeRequest
    /** The date and time the item was created. */
    createdAt?: boolean | number
    /** The date and time the item was updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export interface MoneyRequest{
    /** The raw amount in cents/pence */
    amount?: boolean | number
    /** The current currency details of the money amount */
    currency?: CurrencyRequest
    /** The formatted amount with the cart currency. */
    formatted?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export interface CustomCartAttributeRequest{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    /** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
    addItem?: [{input: AddToCartInput},CartRequest]
    /** Use this to set all the items at once in the cart. This will override any existing items. */
    setItems?: [{input: SetCartItemsInput},CartRequest]
    /** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
    updateItem?: [{input: UpdateCartItemInput},CartRequest]
    /** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
    incrementItemQuantity?: [{input: UpdateItemQuantityInput},CartRequest]
    /** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
    decrementItemQuantity?: [{input: UpdateItemQuantityInput},CartRequest]
    /** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
    removeItem?: [{input: RemoveCartItemInput},CartRequest]
    /** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
    emptyCart?: [{input: EmptyCartInput},CartRequest]
    /** Use this to update the cart currency or attributes. If the cart doesn't exist, it'll throw an error. */
    updateCart?: [{input: UpdateCartInput},CartRequest]
    /** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
    deleteCart?: [{input: DeleteCartInput},DeletePayloadRequest]
    /** Use this to convert a cart to an unpaid order. */
    checkout?: [{input: CheckoutInput},OrderRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AddToCartInput {cartId: Scalars['ID'],id: Scalars['ID'],name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),type?: (CartItemType | null),images?: ((Scalars['String'] | null)[] | null),price: Scalars['Int'],currency?: (CurrencyInput | null),quantity?: (Scalars['Int'] | null),attributes?: ((CustomAttributeInput | null)[] | null)}

export interface CustomAttributeInput {key: Scalars['String'],value?: (Scalars['String'] | null)}

export interface SetCartItemsInput {cartId: Scalars['ID'],items: SetCartItemInput[]}

export interface SetCartItemInput {id: Scalars['ID'],name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),type?: (CartItemType | null),images?: ((Scalars['String'] | null)[] | null),price: Scalars['Int'],currency?: (CurrencyInput | null),quantity?: (Scalars['Int'] | null),attributes?: ((CustomAttributeInput | null)[] | null)}

export interface UpdateCartItemInput {cartId: Scalars['ID'],id: Scalars['ID'],name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),type?: (CartItemType | null),images?: ((Scalars['String'] | null)[] | null),price?: (Scalars['Int'] | null),quantity?: (Scalars['Int'] | null)}

export interface UpdateItemQuantityInput {
/** The ID of the Cart in which the CartItem belongs to. */
cartId: Scalars['ID'],
/** The ID of the CartItem you wish to update. */
id: Scalars['ID'],
/** The amount (as Int) you wish to increment the Cart item quantity by. */
by: Scalars['Int']}

export interface RemoveCartItemInput {
/** The ID of the Cart in which the CartItem belongs to. */
cartId: Scalars['ID'],
/** The ID of the CartItem you wish to remove. */
id: Scalars['ID']}

export interface EmptyCartInput {
/** The ID of the Cart you wish to empty. */
id: Scalars['ID']}

export interface UpdateCartInput {id: Scalars['ID'],currency?: (CurrencyInput | null),email?: (Scalars['String'] | null),notes?: (Scalars['String'] | null),attributes?: ((CustomAttributeInput | null)[] | null)}

export interface DeleteCartInput {
/** The ID of the Cart you wish to delete. */
id: Scalars['ID']}

export interface DeletePayloadRequest{
    success?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CheckoutInput {cartId: Scalars['ID'],email: Scalars['String'],notes?: (Scalars['String'] | null),shipping: AddressInput,billing?: (AddressInput | null)}

export interface AddressInput {company?: (Scalars['String'] | null),name: Scalars['String'],line1: Scalars['String'],line2?: (Scalars['String'] | null),city: Scalars['String'],state?: (Scalars['String'] | null),postalCode: Scalars['String'],country: Scalars['String']}


/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export interface OrderRequest{
    id?: boolean | number
    /** The ID of the cart you want to "checkout". */
    cartId?: boolean | number
    /** The email of the recipient. Can be used later for cart recovery emails. */
    email?: boolean | number
    /** The orders shipping address. */
    shipping?: AddressRequest
    /** The orders billing address. */
    billing?: AddressRequest
    /** The order items that were in the cart. */
    items?: OrderItemRequest
    /** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
    subTotal?: MoneyRequest
    /** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
    shippingTotal?: MoneyRequest
    /** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
    taxTotal?: MoneyRequest
    /** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
    grandTotal?: MoneyRequest
    /** The total item count. */
    totalItems?: boolean | number
    /** The total unique item count. */
    totalUniqueItems?: boolean | number
    /** The notes set at checkout. */
    notes?: boolean | number
    /** The custom attributes set at checkout */
    attributes?: CustomAttributeRequest
    /** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
    status?: boolean | number
    /** The date and time the order was created. */
    createdAt?: boolean | number
    /** The date and time the order status was updated. */
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export interface AddressRequest{
    /** Use this to keep an optional company name for addresses. */
    company?: boolean | number
    /** Use this to keep the name of the recipient. */
    name?: boolean | number
    /** Use this to keep the first line of the address. */
    line1?: boolean | number
    /** Use this to keep the apartment, door number, etc. */
    line2?: boolean | number
    /** Use this to keep the city/town name. */
    city?: boolean | number
    /** Use this to keep the state/county name. */
    state?: boolean | number
    /** Use this to keep the post/postal/zip code. */
    postalCode?: boolean | number
    /** Use this to keep the country name. */
    country?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 * 
 * Order items are identical to the CartItem type.
 */
export interface OrderItemRequest{
    id?: boolean | number
    name?: boolean | number
    description?: boolean | number
    type?: boolean | number
    images?: boolean | number
    unitTotal?: MoneyRequest
    lineTotal?: MoneyRequest
    quantity?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    attributes?: CustomCartAttributeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomAttributeRequest{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Query_possibleTypes = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Cart_possibleTypes = ['Cart']
export const isCart = (obj?: { __typename?: any } | null): obj is Cart => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCart"')
  return Cart_possibleTypes.includes(obj.__typename)
}



const Currency_possibleTypes = ['Currency']
export const isCurrency = (obj?: { __typename?: any } | null): obj is Currency => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCurrency"')
  return Currency_possibleTypes.includes(obj.__typename)
}



const CartItem_possibleTypes = ['CartItem']
export const isCartItem = (obj?: { __typename?: any } | null): obj is CartItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCartItem"')
  return CartItem_possibleTypes.includes(obj.__typename)
}



const Money_possibleTypes = ['Money']
export const isMoney = (obj?: { __typename?: any } | null): obj is Money => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMoney"')
  return Money_possibleTypes.includes(obj.__typename)
}



const CustomCartAttribute_possibleTypes = ['CustomCartAttribute']
export const isCustomCartAttribute = (obj?: { __typename?: any } | null): obj is CustomCartAttribute => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomCartAttribute"')
  return CustomCartAttribute_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const DeletePayload_possibleTypes = ['DeletePayload']
export const isDeletePayload = (obj?: { __typename?: any } | null): obj is DeletePayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isDeletePayload"')
  return DeletePayload_possibleTypes.includes(obj.__typename)
}



const Order_possibleTypes = ['Order']
export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



const Address_possibleTypes = ['Address']
export const isAddress = (obj?: { __typename?: any } | null): obj is Address => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isAddress"')
  return Address_possibleTypes.includes(obj.__typename)
}



const OrderItem_possibleTypes = ['OrderItem']
export const isOrderItem = (obj?: { __typename?: any } | null): obj is OrderItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrderItem"')
  return OrderItem_possibleTypes.includes(obj.__typename)
}



const CustomAttribute_possibleTypes = ['CustomAttribute']
export const isCustomAttribute = (obj?: { __typename?: any } | null): obj is CustomAttribute => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomAttribute"')
  return CustomAttribute_possibleTypes.includes(obj.__typename)
}


export interface QueryPromiseChain{
/** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
cart:((args:{id: Scalars['ID'],currency?: (CurrencyInput | null)})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:(Cart | null))=>Promise<(Cart | null)>})}

export interface QueryObservableChain{
/** Use this to get a cart by a custom ID. If a cart doesn't exist with this ID, it will be created for you. */
cart:((args:{id: Scalars['ID'],currency?: (CurrencyInput | null)})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:(Cart | null))=>Observable<(Cart | null)>})}


/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export interface CartPromiseChain{
/** A custom unique identifer for the cart provided by you. */
id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),
/** The current currency details of the cart. */
currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),
/** The customer for the cart */
email:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The number of total items in the cart */
totalItems:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),
/** The number of total unique items in the cart. */
totalUniqueItems:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),
/** The items currently in the cart. */
items:({get: (request: CartItemRequest, defaultValue?:CartItem[])=>Promise<CartItem[]>}),
/** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
subTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
shippingTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
taxTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
grandTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** A simple helper method to check if the cart is empty. */
isEmpty:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Promise<(Scalars['Boolean'] | null)>}),
/** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
abandoned:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Promise<(Scalars['Boolean'] | null)>}),
/** Custom key/value attributes array for the cart. */
attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Promise<CustomCartAttribute[]>}),
/** Any notes related to the cart/checkout */
notes:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The date and time the cart was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>}),
/** The date and time the cart was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>})}


/** Carts are the core concept of CartQL. Bring your own PIM and use CartQL to calculate your Cart and Checkout. */
export interface CartObservableChain{
/** A custom unique identifer for the cart provided by you. */
id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),
/** The current currency details of the cart. */
currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),
/** The customer for the cart */
email:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The number of total items in the cart */
totalItems:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),
/** The number of total unique items in the cart. */
totalUniqueItems:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),
/** The items currently in the cart. */
items:({get: (request: CartItemRequest, defaultValue?:CartItem[])=>Observable<CartItem[]>}),
/** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
subTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The cart total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
shippingTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The cart total for all items with type TAX, including the raw/formatted amounts and currency details. */
taxTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
grandTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** A simple helper method to check if the cart is empty. */
isEmpty:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Observable<(Scalars['Boolean'] | null)>}),
/** A simple helper method to check if the cart hasn't been updated in the last 2 hours. */
abandoned:({get:(request?:boolean|number,defaultValue?:(Scalars['Boolean'] | null))=>Observable<(Scalars['Boolean'] | null)>}),
/** Custom key/value attributes array for the cart. */
attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Observable<CustomCartAttribute[]>}),
/** Any notes related to the cart/checkout */
notes:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The date and time the cart was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>}),
/** The date and time the cart was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>})}


/** Cart and Cart Items use the currency object to format their unit/line totals. */
export interface CurrencyPromiseChain{
/** The currency code, e.g. USD, GBP, EUR */
code:({get:(request?:boolean|number,defaultValue?:(CurrencyCode | null))=>Promise<(CurrencyCode | null)>}),
/** The currency smybol, e.g. $, £, € */
symbol:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The thousand separator, e.g. ',', '.' */
thousandsSeparator:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The decimal separator, e.g. '.' */
decimalSeparator:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The decimal places for the currency */
decimalDigits:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>})}


/** Cart and Cart Items use the currency object to format their unit/line totals. */
export interface CurrencyObservableChain{
/** The currency code, e.g. USD, GBP, EUR */
code:({get:(request?:boolean|number,defaultValue?:(CurrencyCode | null))=>Observable<(CurrencyCode | null)>}),
/** The currency smybol, e.g. $, £, € */
symbol:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The thousand separator, e.g. ',', '.' */
thousandsSeparator:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The decimal separator, e.g. '.' */
decimalSeparator:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The decimal places for the currency */
decimalDigits:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>})}


/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export interface CartItemPromiseChain{
/** A custom unique identifer for the item provided by you. */
id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),
/** Name for the item. */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** Description for the item. */
description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The type of cart item this is. */
type:({get:(request?:boolean|number,defaultValue?:CartItemType)=>Promise<CartItemType>}),
/** Array of image URLs for the item. */
images:({get:(request?:boolean|number,defaultValue?:((Scalars['String'] | null)[] | null))=>Promise<((Scalars['String'] | null)[] | null)>}),
/** Unit total for the individual item. */
unitTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** Line total (quantity * unit price). */
lineTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** Quantity for the item. */
quantity:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),
/** Custom key/value attributes array for the item. */
attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Promise<CustomCartAttribute[]>}),
/** The date and time the item was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>}),
/** The date and time the item was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>})}


/** A Cart Item is used to store data on the items inside the Cart. There are no strict rules about what you use the named fields for. */
export interface CartItemObservableChain{
/** A custom unique identifer for the item provided by you. */
id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),
/** Name for the item. */
name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** Description for the item. */
description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The type of cart item this is. */
type:({get:(request?:boolean|number,defaultValue?:CartItemType)=>Observable<CartItemType>}),
/** Array of image URLs for the item. */
images:({get:(request?:boolean|number,defaultValue?:((Scalars['String'] | null)[] | null))=>Observable<((Scalars['String'] | null)[] | null)>}),
/** Unit total for the individual item. */
unitTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** Line total (quantity * unit price). */
lineTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** Quantity for the item. */
quantity:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),
/** Custom key/value attributes array for the item. */
attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Observable<CustomCartAttribute[]>}),
/** The date and time the item was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>}),
/** The date and time the item was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>})}


/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export interface MoneyPromiseChain{
/** The raw amount in cents/pence */
amount:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Promise<(Scalars['Int'] | null)>}),
/** The current currency details of the money amount */
currency:(CurrencyPromiseChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Promise<Currency>}),
/** The formatted amount with the cart currency. */
formatted:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}


/** The Money type is used when describing the Cart and Cart Item unit/line totals. */
export interface MoneyObservableChain{
/** The raw amount in cents/pence */
amount:({get:(request?:boolean|number,defaultValue?:(Scalars['Int'] | null))=>Observable<(Scalars['Int'] | null)>}),
/** The current currency details of the money amount */
currency:(CurrencyObservableChain & {get: (request: CurrencyRequest, defaultValue?:Currency)=>Observable<Currency>}),
/** The formatted amount with the cart currency. */
formatted:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}


/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export interface CustomCartAttributePromiseChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}


/** Custom Cart Attributes are used for any type of custom data you want to store on a Cart. These are transferred to Orders when you checkout. */
export interface CustomCartAttributeObservableChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}

export interface MutationPromiseChain{
/** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
addItem:((args:{input: AddToCartInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to set all the items at once in the cart. This will override any existing items. */
setItems:((args:{input: SetCartItemsInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
updateItem:((args:{input: UpdateCartItemInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
incrementItemQuantity:((args:{input: UpdateItemQuantityInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
decrementItemQuantity:((args:{input: UpdateItemQuantityInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
removeItem:((args:{input: RemoveCartItemInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
emptyCart:((args:{input: EmptyCartInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to update the cart currency or attributes. If the cart doesn't exist, it'll throw an error. */
updateCart:((args:{input: UpdateCartInput})=>CartPromiseChain & {get: (request: CartRequest, defaultValue?:Cart)=>Promise<Cart>}),
/** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
deleteCart:((args:{input: DeleteCartInput})=>DeletePayloadPromiseChain & {get: (request: DeletePayloadRequest, defaultValue?:DeletePayload)=>Promise<DeletePayload>}),
/** Use this to convert a cart to an unpaid order. */
checkout:((args:{input: CheckoutInput})=>OrderPromiseChain & {get: (request: OrderRequest, defaultValue?:(Order | null))=>Promise<(Order | null)>})}

export interface MutationObservableChain{
/** Use this to add items to the cart. If the item already exists, the provided input will be merged and quantity will be increased. */
addItem:((args:{input: AddToCartInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to set all the items at once in the cart. This will override any existing items. */
setItems:((args:{input: SetCartItemsInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to update any existing items in the cart. If the item doesn't exist, it'll return an error. */
updateItem:((args:{input: UpdateCartItemInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to increase the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
incrementItemQuantity:((args:{input: UpdateItemQuantityInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to decrease the item quantity of the provided item ID. If the item doesn't exist, it'll throw an error. */
decrementItemQuantity:((args:{input: UpdateItemQuantityInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to remove any items from the cart. If it doesn't exist, it'll throw an error. */
removeItem:((args:{input: RemoveCartItemInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to empty the cart. If the cart doesn't exist, it'll throw an error. */
emptyCart:((args:{input: EmptyCartInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to update the cart currency or attributes. If the cart doesn't exist, it'll throw an error. */
updateCart:((args:{input: UpdateCartInput})=>CartObservableChain & {get: (request: CartRequest, defaultValue?:Cart)=>Observable<Cart>}),
/** Use this to delete a cart. If the cart doesn't exist, it'll throw an error. */
deleteCart:((args:{input: DeleteCartInput})=>DeletePayloadObservableChain & {get: (request: DeletePayloadRequest, defaultValue?:DeletePayload)=>Observable<DeletePayload>}),
/** Use this to convert a cart to an unpaid order. */
checkout:((args:{input: CheckoutInput})=>OrderObservableChain & {get: (request: OrderRequest, defaultValue?:(Order | null))=>Observable<(Order | null)>})}

export interface DeletePayloadPromiseChain{success:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Promise<Scalars['Boolean']>}),message:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface DeletePayloadObservableChain{success:({get:(request?:boolean|number,defaultValue?:Scalars['Boolean'])=>Observable<Scalars['Boolean']>}),message:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}


/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export interface OrderPromiseChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),
/** The ID of the cart you want to "checkout". */
cartId:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),
/** The email of the recipient. Can be used later for cart recovery emails. */
email:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** The orders shipping address. */
shipping:(AddressPromiseChain & {get: (request: AddressRequest, defaultValue?:Address)=>Promise<Address>}),
/** The orders billing address. */
billing:(AddressPromiseChain & {get: (request: AddressRequest, defaultValue?:Address)=>Promise<Address>}),
/** The order items that were in the cart. */
items:({get: (request: OrderItemRequest, defaultValue?:OrderItem[])=>Promise<OrderItem[]>}),
/** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
subTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
shippingTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
taxTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
grandTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),
/** The total item count. */
totalItems:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),
/** The total unique item count. */
totalUniqueItems:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),
/** The notes set at checkout. */
notes:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** The custom attributes set at checkout */
attributes:({get: (request: CustomAttributeRequest, defaultValue?:CustomAttribute[])=>Promise<CustomAttribute[]>}),
/** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
status:({get:(request?:boolean|number,defaultValue?:OrderStatus)=>Promise<OrderStatus>}),
/** The date and time the order was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>}),
/** The date and time the order status was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>})}


/** Orders are immutable. Once created, you can't change them. The status will automatically reflect the current payment status. */
export interface OrderObservableChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),
/** The ID of the cart you want to "checkout". */
cartId:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),
/** The email of the recipient. Can be used later for cart recovery emails. */
email:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** The orders shipping address. */
shipping:(AddressObservableChain & {get: (request: AddressRequest, defaultValue?:Address)=>Observable<Address>}),
/** The orders billing address. */
billing:(AddressObservableChain & {get: (request: AddressRequest, defaultValue?:Address)=>Observable<Address>}),
/** The order items that were in the cart. */
items:({get: (request: OrderItemRequest, defaultValue?:OrderItem[])=>Observable<OrderItem[]>}),
/** Sum of all SKU items, excluding discounts, taxes, shipping, including the raw/formatted amounts and currency details */
subTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The total for all items with type SHIPPING, including the raw/formatted amounts and currency details. */
shippingTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The total for all items with type TAX, including the raw/formatted amounts and currency details. */
taxTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The grand total for all items, including shipping, including the raw/formatted amounts and currency details. */
grandTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),
/** The total item count. */
totalItems:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),
/** The total unique item count. */
totalUniqueItems:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),
/** The notes set at checkout. */
notes:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** The custom attributes set at checkout */
attributes:({get: (request: CustomAttributeRequest, defaultValue?:CustomAttribute[])=>Observable<CustomAttribute[]>}),
/** The current order status. This will reflect the current payment status. The first stage is 'unpaid'. */
status:({get:(request?:boolean|number,defaultValue?:OrderStatus)=>Observable<OrderStatus>}),
/** The date and time the order was created. */
createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>}),
/** The date and time the order status was updated. */
updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>})}


/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export interface AddressPromiseChain{
/** Use this to keep an optional company name for addresses. */
company:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** Use this to keep the name of the recipient. */
name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** Use this to keep the first line of the address. */
line1:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** Use this to keep the apartment, door number, etc. */
line2:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** Use this to keep the city/town name. */
city:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** Use this to keep the state/county name. */
state:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),
/** Use this to keep the post/postal/zip code. */
postalCode:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),
/** Use this to keep the country name. */
country:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>})}


/** Addresses are associated with Orders. They can either be shipping or billing addresses. */
export interface AddressObservableChain{
/** Use this to keep an optional company name for addresses. */
company:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** Use this to keep the name of the recipient. */
name:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** Use this to keep the first line of the address. */
line1:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** Use this to keep the apartment, door number, etc. */
line2:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** Use this to keep the city/town name. */
city:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** Use this to keep the state/county name. */
state:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),
/** Use this to keep the post/postal/zip code. */
postalCode:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),
/** Use this to keep the country name. */
country:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>})}


/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 * 
 * Order items are identical to the CartItem type.
 */
export interface OrderItemPromiseChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Promise<Scalars['ID']>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>}),type:({get:(request?:boolean|number,defaultValue?:CartItemType)=>Promise<CartItemType>}),images:({get:(request?:boolean|number,defaultValue?:((Scalars['String'] | null)[] | null))=>Promise<((Scalars['String'] | null)[] | null)>}),unitTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),lineTotal:(MoneyPromiseChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Promise<Money>}),quantity:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Promise<Scalars['Int']>}),createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>}),updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Promise<Scalars['Date']>}),attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Promise<CustomCartAttribute[]>})}


/**
 * Orders contain items that were converted from the Cart at 'checkout'.
 * 
 * Order items are identical to the CartItem type.
 */
export interface OrderItemObservableChain{id:({get:(request?:boolean|number,defaultValue?:Scalars['ID'])=>Observable<Scalars['ID']>}),name:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),description:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>}),type:({get:(request?:boolean|number,defaultValue?:CartItemType)=>Observable<CartItemType>}),images:({get:(request?:boolean|number,defaultValue?:((Scalars['String'] | null)[] | null))=>Observable<((Scalars['String'] | null)[] | null)>}),unitTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),lineTotal:(MoneyObservableChain & {get: (request: MoneyRequest, defaultValue?:Money)=>Observable<Money>}),quantity:({get:(request?:boolean|number,defaultValue?:Scalars['Int'])=>Observable<Scalars['Int']>}),createdAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>}),updatedAt:({get:(request?:boolean|number,defaultValue?:Scalars['Date'])=>Observable<Scalars['Date']>}),attributes:({get: (request: CustomCartAttributeRequest, defaultValue?:CustomCartAttribute[])=>Observable<CustomCartAttribute[]>})}

export interface CustomAttributePromiseChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Promise<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Promise<(Scalars['String'] | null)>})}

export interface CustomAttributeObservableChain{key:({get:(request?:boolean|number,defaultValue?:Scalars['String'])=>Observable<Scalars['String']>}),value:({get:(request?:boolean|number,defaultValue?:(Scalars['String'] | null))=>Observable<(Scalars['String'] | null)>})}