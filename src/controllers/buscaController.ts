import { Request, Response } from "express";
import { createMenu } from "../helpers/objectMenu";
import { pets } from "../models/pets";

export const busca = ((req:Request, res: Response) => {

    let query:string = req.query.q as string;

    if(!query){
        res.redirect('/');
        return;
    }

    let list = pets.getName(query);

    res.render('pages/page', {
        menu: createMenu(""),
        list,
        query
    })

})