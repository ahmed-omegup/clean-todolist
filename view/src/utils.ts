import { useState } from 'react';
import type { Controller } from '../../controllers/type';
import type { Presenter, Result } from '../../use-cases/types';

export const useController = <TRequest, TResult, TError>(
  constrollerFactory: (q: Presenter<TResult, TError>) => Controller<TRequest>,
  callback?: (error: TError | null, result: TResult | null) => void
) => {
  const [response, setResponse] = useState<Result<TResult, TError> | null>(
    null
  );

  const controller = constrollerFactory({
    present(response) {
      setResponse(response);
      if (callback) {
        if (response.success) {
          callback(null, response.data);
        } else {
          callback(response.error, null);
        }
      }
    },
  });

  return {
    controller,
    error: response?.success === false ? response.error : null,
    result: response?.success === true ? response.data : null,
    success: response?.success,
  };
};
