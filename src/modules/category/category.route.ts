import express from 'express';
import { CategoryController } from './category.controller';



const router=express.Router()

router.post('/category-create', CategoryController.InserIntoDB)


export const CategoryRoutes=router