import { Request, Response } from 'express'

/* export class UserController {
  static getAll(req: Request, res: Response) {
    res.json([])
  }
  
  static create(req: Request, res: Response) {
    res.json([])
  } 
  
  static update(req: Request, res: Response) {
    res.json([])
  } 
  
  static delete(req: Request, res: Response) {
    res.json([])
  } 
} */

const getAll = (req: Request, res: Response) => {
  res.json([])
} 

const create = (req: Request, res: Response) => {
  res.json([])
} 

const update = (req: Request, res: Response) => {
  res.json([])
} 

const remove = (req: Request, res: Response) => {
  res.json([])
}

export const UserController = {
  getAll,
  create,
  update,
  delete: remove
}