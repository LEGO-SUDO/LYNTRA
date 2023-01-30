import Cart from '../models/Cart.js'
import bcrypt from 'bcryptjs'

export const createCart = async (req, res, next) => {
  const newCart = new Cart(req.body)
  try {
    const savedCart = await newCart.save()
    res.status(200).send(savedCart)
  } catch (err) {
    res.status(500).json(err)
  }
}
export const updateCart = async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })

    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteCart = async (req, res, next) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json('Cart has been deleted!')
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getAllCart = async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json(err)
  }
}
