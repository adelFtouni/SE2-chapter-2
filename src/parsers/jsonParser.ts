import * as fs from 'fs/promises';
import { DatasetRow } from '../mappers/book.mapper';

export async function readJsonFile(path: string): Promise<DatasetRow []> {
    
        const jsonString = await fs.readFile(path, "utf-8");
        console.log(jsonString);

        if (!jsonString.trim()) {
            throw new Error("Empty JSON file");
        }

        try {
            const data = JSON.parse(jsonString);
            return data;
        } catch (err) {
            throw new Error(err+"Malformed JSON");
        }
}