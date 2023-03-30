
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import logger from '../logger';

export const send = (pathname: string) => {
  const data = of(pathname).pipe(
    // tap(logger.info),
    // get tag data and rules by pathname
    map(v => v)  
  );
  data.subscribe({
    next: (digitalData: Record<string, unknown>) => logger.log('fill digital data by current storage data', digitalData),
    error: (e: Error) => logger.error('send error', e),
    complete: () => logger.info('send complete') 
  });
}