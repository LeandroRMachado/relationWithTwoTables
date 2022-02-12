import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

class CreateChampionShipController {
  
  async handle(request:Request, response: Response) {
    const { name } = request.body

    const championShip = await prismaClient.championShip.create({
      data: {
        name
      }
    })

    return response.json(championShip) 
  }
}

export { CreateChampionShipController }