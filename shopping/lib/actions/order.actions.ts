import { OrderItem, ShippingAddress,  } from '@/types'
import { round2 } from '../utils'
import { AVAILABLE_DELIVERY_DATES } from '../constants'

export const calcDeliveryDateAndPrice = async ({
  items,
  shippingAddress,
  deliveryDateIndex,
}: {
  deliveryDateIndex?: number
  items: OrderItem[]
  shippingAddress?: ShippingAddress
}) => {
  const itemsPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )

  const deliveryDate =
  AVAILABLE_DELIVERY_DATES[
    deliveryDateIndex === undefined
    ? AVAILABLE_DELIVERY_DATES.length -1
    :deliveryDateIndex
  ]

  const shippingPrice =
    !shippingAddress || !deliveryDate
      ? undefined
      : deliveryDate.freeShippingMinPrice > 0 &&
          itemsPrice >= deliveryDate.freeShippingMinPrice
        ? 0
        : deliveryDate.shippingPrice


  const taxPrice = round2(itemsPrice * 0.15)


  const totalPrice = round2(
    itemsPrice +
      (shippingPrice ? round2(shippingPrice) : 0) +
      (taxPrice ? round2(taxPrice) : 0)
  )
  return {
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
  }
}