import { Request, Response } from "express";
import Liquor from "../../models/liquors.model";

export const getLiquors = async (req: Request, res: Response) => {
  try {
    const liquor = await Liquor.find();
    res.status(200).json(liquor);
  } catch (error) {
    res.status(500).send("Error al traer los licores");
  }
};

export const createLiquor = async (req: Request, res: Response) => {
  try {
    const { nameLiquors, commentLiquors, priceLiquors } = req.body;
    const liquor = new Liquor({  nameLiquors, commentLiquors, priceLiquors  });
    await liquor.save();
    res.status(201).json(liquor);
  } catch (error) {
    res.status(500).send("Error con la creacion del licor");
  }
};

export const getLiquor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const liquor = await Liquor.findById(id);
    res.status(200).json(liquor);
  } catch (error) {
    res.status(500).send("Error al obtener el equipo");
  }
};

export const updateLiquor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nameLiquors, commentLiquors, priceLiquors } = req.body;
    const liquor = await Liquor.findByIdAndUpdate(id, {  nameLiquors, commentLiquors, priceLiquors }, { new: true});
    res.status(200).json(liquor);
  } catch (error) {
    return res.status(404).send("Licor no encontrado");
  }
};

export const deleteLiquor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Liquor.findByIdAndDelete(id);
    res.status(204).send("Se elimino la publicacion");
  } catch (error) {
    return res.status(404).send("Licor no encontrad0");
  }
};




