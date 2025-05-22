export class ItemNotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ItemNotFoundException';
       
    }
}

export class ItemInvalidException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidItemException';
       
    }
}