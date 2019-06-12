import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryParams } from '@ngrx/data';

// project
import { HolochainDataService } from './holochain-data.service';

@Injectable()
export class PostDataService extends HolochainDataService {

    name = 'post';
    conf = {
        instance: 'test-instance',
        zome: 'coolcats',
        add: 'post',
        delete: '',
        getAll: '',
        getById: 'get_post',
        getWithQuery: ['get_posts_by', 'get_posts_with_hashtag'],
        update: '',
        upsert: '',
        param: {}
        // missing get_posts_with_hashtag
    };

    add(entity: any): Observable<any> {
        return super.add(entity)
            .pipe(map((result: string) => {
                return { id: JSON.parse(result).value, ...entity };
            }));
    }
    
    getById(key: number | string): Observable<any> {
        return super.getById(key)
            .pipe(map((result: any) => {
                const item = JSON.parse(result).value;
                return { id: key, ...item.post, author: item.author }
            }));
    }

    getWithQuery(queryParams: QueryParams | string): Observable<any> {
        return super.getWithQuery(queryParams)
        .pipe(map((result: any) => {
            const res = [];
            const item = JSON.parse(result).value;
            item.forEach(e => {
                res.push({ id: e.address, ...e.post, author: e.author });
            });
            return res;
        }));
    }
}