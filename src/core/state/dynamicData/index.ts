import { createStore, withProps, setProps } from '@ngneat/elf';
import { isEmpty } from 'lodash';
import { BehaviorSubject } from 'rxjs';
interface DynamicDataProps {
  [key: string]: any;
}

export const store = createStore(
  { name: 'dynamicData' },
  withProps<DynamicDataProps>({})
);

export const update = (identifier: string, dynamicData: any) => {
  const values = store.getValue();
  if (values[identifier]) {
    const data$ = values[identifier];
    data$.next(dynamicData);
  }
  else {
    const data$ = new BehaviorSubject(dynamicData);
    store.update(
      setProps(store => ({
          ...store,
          ...{ [identifier]: data$ },
      }))
    );
    if(!isEmpty(dynamicData)) {
      data$.next(dynamicData);
    }
  }
}
  
