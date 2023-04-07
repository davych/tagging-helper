import { createStore, withProps, setProps } from '@ngneat/elf';
import { pageView } from '../../senders';
import { controllers } from '..';

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
    const controllersMap = controllers.store.getValue();
    console.log('pathname---->', Object.keys(controllersMap));
    if (pathname && !controllersMap[pathname]) {
      pageView.send(pathname);
    }
  },
  // error: (e: Error) => logger.error('store pathname error', e),
  // complete: () => logger.info('store pathname -> store complete'),
});
