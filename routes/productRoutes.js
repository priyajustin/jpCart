import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { brainTreePaymentController, braintreeTokenController, createProductController, deleteProductController, getProductController, getSingleProductController, productCategoryController, productCountController, productFilterController, productListController, productPhotoController, realtedProductController, searchProductController, updateProductController } from '../controllers/productController.js'
import formidable from 'express-formidable'

const router=express.Router()

//routes
//create product
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//update product
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//get All product
router.get('/get-product',getProductController)

//get single product
router.get('/get-single-Product/:slug',getSingleProductController)

//get photo 
router.get('/product-photo/:pid',productPhotoController)

//delete product
router.delete('/product/:pid',deleteProductController)

//filter product
router.post('/product-filters',productFilterController)

//product count
router.get('/product-count',productCountController)

//product per page
router.get('/product-list/:page',productListController)

//product search
router.get('/search/:keyword',searchProductController)

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default router