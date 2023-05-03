import { Router } from "express";
import multer from 'multer'
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { CreateUserController } from './controllers/user/CreateUserController'
import { UserDetailsController } from "./controllers/user/UserDetailsController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import uploadConfig from './config/multer'
import { ListProductsController } from "./controllers/product/ListProductsController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { AddItemsController } from "./controllers/order/AddItemsController";
import { DeleteItemController } from "./controllers/order/DeleteItemController";
import { RemoveDraftOrderController } from "./controllers/order/RemoveDraftOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"))

// USERS ROUTES
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new UserDetailsController().handle)

// CATEGORIES ROUTES
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/categories', isAuthenticated, new ListCategoryController().handle)

// PRODUCT ROUTES
router.get('/product', isAuthenticated, new ListProductsController().handle)
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

//ORDER ROUTES
router.get('/order', isAuthenticated, new ListOrderController().handle)
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.delete('/order', isAuthenticated, new DeleteOrderController().handle)
router.post('/order/item', isAuthenticated, new AddItemsController().handle)
router.delete('/order/item', isAuthenticated, new DeleteItemController().handle)
router.put('/order/send', isAuthenticated, new RemoveDraftOrderController().handle)

export { router }