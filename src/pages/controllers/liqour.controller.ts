import { Request, Response } from 'express';
import Liqour from '../../models/liquors.model';

export const pageGetLiqour = async (req: Request, res: Response) => {
    try {
        const liqour = await Liqour.find();
        res.render('user/index', { liqour });
    } catch (error) {
        res.status(500).send('Error');
    }
};

export const pageUpdateLiqour = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const liqour = await Liqour.findById(id);
        res.render('liqour/edit', { liqour });
    } catch (error) {
        res.status(500).send('Error');
    }
};


