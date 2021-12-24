import express from "express";

import { createRekord, showTamu, showView, showViewPartial } from "../controllers/record.js";

const router = express.Router();

router.post('/rekord', createRekord)
router.get('/rekord', showTamu)
router.get('/view', showView)
router.get('/view/partial', showViewPartial)

export default router;