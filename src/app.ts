import express, { Application } from "express"
import cors from "cors"
import { CategoryRoutes } from "./modules/category/category.route"
import { ProductRoutes } from "./modules/product/product.route"
import { AuthRoutes } from "./modules/auth/auth.route"
import { UserRoutes } from "./modules/user/userRoutes"
import { OnlineOrderRoutes } from "./modules/OnlineOrder/onlineOrder.Routes"




const app:Application=express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))


app.use('/api/v1/catagory', CategoryRoutes)
app.use('/api/v1', ProductRoutes)
app.use('/api/v1', AuthRoutes)
app.use('/api/v1', UserRoutes)
app.use('/api/v1', OnlineOrderRoutes)

export default app;