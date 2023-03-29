
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import logger from '../logger';

export const send = (pathname: string) => {
  const data = of(pathname).pipe(
    tap(logger),
    // get tag data and rules by pathname
    map(v => v)  
  );
  data.subscribe({
    next: (digitalData: Record<string, unknown>) => console.log('send---->', digitalData),
    error: (e: Error) => console.error('send error', e),
    complete: () => console.info('send complete') 
  });
}