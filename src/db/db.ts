import PocketBase from 'pocketbase';
import { TypedPocketBase } from '../types/db.types';

export const client = new PocketBase('PocketBaseServerURL') as TypedPocketBase;
