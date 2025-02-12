import { UserGreeting, Welcome } from "../controllers/user.controller";

const router = require('express-promise-router')();

router.get('/', Welcome)
router.get('/user', UserGreeting)

export default router