import { createStore, withProps, setProps } from '@ngneat/elf';
import logger from '../../logger';
import { pageView } from '../../senders';

interface PathnameProps {
  pathname: string | null;
}

export const store = createStore(
  { name: 'pathname' },
  withProps<PathnameProps>({ pathname: null })
);

export const update = (pathname: string) =>
  store.update(setProps({ pathname }));

// subscribe to the store
store.subscribe({
  next: ({ pathname }: { pathname: string }) => {
    if (pathname) {
      logger.info('before send can handle runtime data', pathname);
      pageView.send(pathname);
    }
  },
  error: (e: Error) => logger.error('store pathname error', e),
  complete: () => logger.info('store pathname -> store complete'),
});
