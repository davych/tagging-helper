
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import logger from '@/core/logger';

export const send = (pathname: string) => {
  const data = of(pathname).pipe(
    tap(logger),
    // get tag data and rules by pathname
    map(v => v)  
  );
  data.subscribe({
    next: (digitalData) => console.log('send---->', digitalData),
    error: (e) => console.error('send error', e),
    complete: () => console.info('send complete') 
  });
}