import { Router } from "express"
import { CreateTeamController } from "./controllers/CreateTeamController"



const router = Router ()

const createTeam = new CreateTeamController()

router.post("/team", createTeam.handle)

export { router }