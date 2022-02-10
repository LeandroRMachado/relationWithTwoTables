import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";



class CreateTeamController {
  async handle(request:Request, response: Response) {
    const {name} = request.body;

    const team = await prismaClient.team.create({
      data : {
        name
      }
    })

    return response.json(team)
  }
}


export { CreateTeamController}