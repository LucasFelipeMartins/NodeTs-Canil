import { Router } from "express";
import * as pageController from '../controllers/pageController'
import * as buscaController from '../controllers/buscaController'

const router = Router();

router.get('/', pageController.home);
router.get('/cachorros', pageController.dogs);
router.get('/gatos', pageController.cats);
router.get('/peixes', pageController.fishes);

router.get('/busca', buscaController.busca)

export default router;  