import { Type,Cake } from "../Cake.model";
import logger from "../../util/logger";
export class CakeBuilder{
private id!: string;
private type!: Type;
private flavor!: string;
private filling!: string;
private size!: string;
private layers!: number;
private frostingType!: string;
private frostingFlavor!: string;
private decorationType!: string;
private decorationColor!: string;
private customMessage!: string;
private shape!: string;
private allergies!: string;
private specialIngredients!: string;
private packagingType!: string;
private price!: number;
private quantity!: number;

public setId(id: string): CakeBuilder {
    this.id = id;
    return this;
}

public setType(type: Type): CakeBuilder {
    this.type = type;
    return this;
}

public setFlavor(flavor: string): CakeBuilder {
    this.flavor = flavor;
    return this;
}

public setFilling(filling: string): CakeBuilder {
    this.filling = filling;
    return this;
}

public setSize(size: string): CakeBuilder {
    this.size = size;
    return this;
}

public setLayers(layers: number): CakeBuilder {
    this.layers = layers;
    return this;
}

public setFrostingType(frostingType: string): CakeBuilder {
    this.frostingType = frostingType;
    return this;
}

public setFrostingFlavor(frostingFlavor: string): CakeBuilder {
    this.frostingFlavor = frostingFlavor;
    return this;
}

public setDecorationType(decorationType: string): CakeBuilder {
    this.decorationType = decorationType;
    return this;
}

public setDecorationColor(decorationColor: string): CakeBuilder {
    this.decorationColor = decorationColor;
    return this;
}

public setCustomMessage(customMessage: string): CakeBuilder {
    this.customMessage = customMessage;
    return this;
}

public setShape(shape: string): CakeBuilder {
    this.shape = shape;
    return this;
}

public setAllergies(allergies: string): CakeBuilder {
    this.allergies = allergies;
    return this;
}

public setSpecialIngredients(specialIngredients: string): CakeBuilder {
    this.specialIngredients = specialIngredients;
    return this;
}

public setPackagingType(packagingType: string): CakeBuilder {
    this.packagingType = packagingType;
    return this;
}

public setPrice(price: number): CakeBuilder {
    this.price = price;
    return this;
}

public setQuantity(quantity: number): CakeBuilder {
    this.quantity = quantity;
    return this;
}

build(): Cake {
    const requiredProperties = [
        this.id,
        this.type,
        this.flavor,
        this.filling,
        this.size,
        this.layers,
        this.frostingType,
        this.frostingFlavor,
        this.decorationType,
        this.decorationColor,
        this.customMessage,
        this.shape,
        this.allergies,
        this.specialIngredients,
        this.packagingType,
        this.price,
        this.quantity,
    ];

    for (const property of requiredProperties) {
        if (!property) {
            logger.error("Could not create a cake: Missing required property");
            throw new Error("Missing required property in CakeBuilder");
        }
    }

    if(this.price < 0){
        logger.error("price should be greater than zero");
        throw new Error("price should be greater than zero");
    }
    return new Cake(
        this.id,
        this.type,
        this.flavor,
        this.filling,
        this.size,
        this.layers,
        this.frostingType,
        this.frostingFlavor,
        this.decorationType,
        this.decorationColor,
        this.customMessage,
        this.shape,
        this.allergies,
        this.specialIngredients,
        this.packagingType,
        this.price,
        this.quantity
    );
}

}