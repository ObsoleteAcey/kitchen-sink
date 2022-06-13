import { Dictionary, MapOptions, MapArrayOptions, Mapper } from '@automapper/core';
import { injectable } from 'inversify';
import { MappingConfigurator } from '../config/mapping.config';

@injectable()
export  class MappingService {
    private _mapper: Mapper;

    constructor() {
        this._mapper = MappingConfigurator.mapper;
    }

    /* public map<TSource extends Dictionary<TSource> = any, TDestination extends Dictionary<TDestination> = any, TExtraArguments extends Record<string, any> = Record<string, any>>(sourceObj: TSource, destination: new (...args: unknown[]) => TDestination, source: new (...args: unknown[]) => TSource, options?: MapOptions<TSource, TDestination, TExtraArguments>): TDestination {
        return this._mapper.map<TSource, TDestination, TExtraArguments>(sourceObj, destination, source, options);
    } */

    public map<TSource extends Dictionary<TSource>, TDestination extends Dictionary<TDestination>, TExtraArguments extends Record<string, any> = Record<string, any>>(sourceObj: TSource, destination: new (...args: unknown[]) => TDestination, source: new (...args: unknown[]) => TSource, options?: MapOptions<TSource, TDestination, TExtraArguments>): TDestination {
        return this._mapper.map<TSource, TDestination, TExtraArguments>(sourceObj, destination, source, options);
    }

    public mapArray<TSource extends Dictionary<TSource>, TDestination extends Dictionary<TDestination>, TExtraArguments extends Record<string, any> = Record<string, any>>(sourceArray: TSource[], destination: new (...args: unknown[]) => TDestination, source: new (...args: unknown[]) => TSource, options?: MapArrayOptions<TSource, TDestination, TExtraArguments>): TDestination[] {
        return this._mapper.mapArray<TSource, TDestination, TExtraArguments>(sourceArray, destination, source, options);
    }

    public mapToObject<TSource extends Dictionary<TSource> = any, TDestination extends Dictionary<TDestination> = any, TExtraArguments extends Record<string, any> = Record<string, any>>(sourceObj: TSource, destination: new (...args: unknown[]) => TDestination, source: new (...args: unknown[]) => TSource, destinationObj: TDestination, options?: MapOptions<TSource, TDestination, TExtraArguments>): void {
        this._mapper.map<TSource, TDestination, TExtraArguments>(sourceObj, destination, source, destinationObj, options);
    }

    // map<TSource extends Dictionary<TSource>, TDestination extends Dictionary<TDestination>, TExtraArguments extends Record<string, any> = Record<string, any>>(sourceObj: TSource, destination: string, source: string, destinationObj: TDestination, options?: MapOptions<TSource, TDestination, TExtraArguments>): void;
}