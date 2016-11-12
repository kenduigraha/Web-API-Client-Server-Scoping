'use strict'

let getRandMeal = (req, res) => {
  let rand = Math.floor(Math.random()*5)
  let meals = ['Apple Pie', 'Sweet & Sour Chicken', 'Breakfast Sandwich', 'Tuna Casserole ', 'Bagels']
  
  res.status(200).json(meals[rand])
}

module.exports = {
  getRandMeal
}
