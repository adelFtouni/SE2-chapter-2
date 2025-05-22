import { CakeBuilder } from "../model/builders/cake.builder";
import { Cake,Type } from "../model/Cake.model";
import { IMapper } from "./IMapper";
export class CSVCakeMapper implements IMapper<string[], Cake> {
    map(data: string[]): Cake {
        return CakeBuilder.newBuilder()
                .setId(data[0])
               .setType(data[1] as Type)
               .setFlavor(data[2])
               .setFilling(data[3])
               .setSize(data[4])
               .setLayers(parseInt(data[5]))
               .setFrostingType(data[6])
               .setFrostingFlavor(data[7])
               .setDecorationType(data[8])
               .setDecorationColor(data[9])
               .setCustomMessage(data[10])
               .setShape(data[11])
               .setAllergies(data[12])
               .setSpecialIngredients(data[13])
               .setPackagingType(data[14])
               .setPrice(parseFloat(data[15]))
               .setQuantity(parseInt(data[16]))
               .build();
    }
 reverseMap(data : Cake):string[]{
     return [
        data.getId(),
        data.getType(),
        data.getFlavor(),
        data.getFilling(),
        data.getSize(),
        data.getLayers().toString(),
        data.getFrostingType(),
        data.getFrostingFlavor(),
        data.getDecorationType(),
        data.getDecorationColor(),
        data.getCustomMessage(),
        data.getShape(),
        data.getAllergies(),
        data.getSpecialIngredients(),
        data.getPackagingType(),
        data.getPrice().toString(),
        data.getQuantity().toString()
     ]
}

}