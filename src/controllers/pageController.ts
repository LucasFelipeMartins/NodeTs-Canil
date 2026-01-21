import { Request, Response } from "express";
import { createMenu } from "../helpers/objectMenu";
import { pets } from "../models/pets";

export const home = ((req:Request, res: Response) => {

    let list = pets.getall()

    res.render('pages/page', {
        menu: createMenu("all"),
        banner: {
            title: "Todos os animais",
            background: "allanimals.jpg"
        },
        list
    });

})

export const dogs = ((req:Request, res: Response) => {

    let list = pets.getType("dog");

    res.render('pages/page', {
        menu: createMenu("dogs"),
        banner: {
            title: "Cachorros",
            background: "banner_dog.jpg"
        },
        list
    });

})

export const cats = ((req:Request, res: Response) => {

    let list = pets.getType("cat");

    res.render('pages/page', {
        menu: createMenu("cats"),
        banner: {
            title: "Gatos",
            background: "banner_cat.jpg"
        },
        list
    });

})

export const fishes = ((req:Request, res: Response) => {

    let list = pets.getType("fish");
    res.render('pages/page', {
        menu: createMenu("fish"),
        banner: {
            title: "Peixes",
            background: "banner_fish.jpg"
        },
        list
    });

})