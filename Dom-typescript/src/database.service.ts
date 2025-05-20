import type {movie} from './movieIF';

export class DatabaseService {
    private db: IDBDatabase | null = null;
    private readonly DB_NAME = 'moviesDB';
    private readonly STORE_NAME = 'movies';
}