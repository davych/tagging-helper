import { useEffect } from 'react';
import { of } from 'rxjs';
import { pageView } from '../../core/senders';
import { controllers } from '../../core/state';
export const usePipeData = (identifier: string, runtimeData: any) => {
  useEffect(()=> {
    if (!runtimeData) {
      return;
    }
    controllers.update({ [identifier]: of(runtimeData) });
    pageView.send(identifier);
  }, [runtimeData])
}