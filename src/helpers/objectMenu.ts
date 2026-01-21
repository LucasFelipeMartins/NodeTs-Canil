type menu = "" | "all" | "dogs" | "cats" | "fish"

export const createMenu = (menuActive:menu) => {

    let object = {
        all: false,
        dogs: false,
        cats: false,
        fish: false
    };

    if(menuActive !== ""){
        object[menuActive] = true;
    };

    return object;

}