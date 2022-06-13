import {addAttributeOptions} from 'sequelize-typescript';

export function toNumber(target: any, propertyKey: string): any {
    addAttributeOptions(target, propertyKey, {
        get(): any {
            return + this.getDataValue(propertyKey);
        }
    });
}
