import { PrismaClient,addToCart } from "@prisma/client";



const prisma=new PrismaClient()

const insertIntoDB = async (data:addToCart) => {
  try {
    // Check if the item already exists in the user's cart
    const existingCartItem = await prisma.addToCart.findFirst({
      where: {
        productID:data.productID
      }
    });

    if (existingCartItem) {
      // If the item already exists, update kg and price
      const updatedCartItem = await prisma.addToCart.update({
        where: {
          id: existingCartItem.id
        },
        data: {
          kg: existingCartItem.kg + data.kg, // Increment kg
          price: existingCartItem.price + data.price // Adjust price
        }
      });

      return updatedCartItem;
    } else {
      // If the item doesn't exist, create a new entry
      const result = await prisma.addToCart.create({
        include:{
          user:true
        },
        data
      });

      return result;
    }
  } catch (error) {
    // Handle errors here
    console.error("Error adding item to cart:", error);
    throw error;
  }
};
const decrementAddTCart = async (data:addToCart) => {
  try {
    // Check if the item already exists in the user's cart
    const existingCartItem = await prisma.addToCart.findFirst({
      where: {
        productID:data.productID
      }
    });

    if (existingCartItem && existingCartItem.kg > 1) {
      let updatedKg = existingCartItem.kg - 1; // Decrement kg by 1
      let updatedPrice = existingCartItem.price - existingCartItem.price / existingCartItem.kg; // Adjust price

      // Ensure price doesn't go below 0
      updatedPrice = updatedPrice < 0 ? 0 : updatedPrice;

      // Update the item in the cart
      const updatedCartItem = await prisma.addToCart.update({
        where: {
          id: existingCartItem.id
        },
        data: {
          kg: updatedKg,
          price: updatedPrice
        }
      });

      return updatedCartItem;
    } else if (existingCartItem && existingCartItem.kg === 1) {
      // If the quantity is already 1, don't perform decrement, just return the existing cart item
      return existingCartItem;
    } else {
      // If the item doesn't exist in the cart, return null
      return null;
    }
  } catch (error) {
    // Handle errors here
    console.error("Error removing item from cart:", error);
    throw error;
  }
};








const getUserAddToCart=async(data:string)=>{
  const result= await prisma.addToCart.findMany({
    include:{
     user:true
    },
    where:{
      UserID:data
    }
  })
  return result
}


const deleteAddtoCart =async(id:string)=>{
  const result= await prisma.addToCart.delete({
    where:{
      id
    }
  })
  return result
}









export const AddToCartService={

    insertIntoDB,
    decrementAddTCart,
    getUserAddToCart,
    deleteAddtoCart

}