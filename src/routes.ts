import { Router } from "express"
import { CreateChampionShipController } from "./controllers/CreateChampionShipController"
import { CreateTeamController } from "./controllers/CreateTeamController"

const router = Router ()

const createChampionShip = new CreateChampionShipController()
const createTeam = new CreateTeamController()

router.post("/team", createTeam.handle)

router.post("/championShip", createChampionShip.handle)

export { router }