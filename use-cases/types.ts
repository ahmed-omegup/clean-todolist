export type Result<T, E> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: E;
    };

export interface Requester<TRequest> {
  execute(request: TRequest): void;
}

export interface Presenter<TResult, TError> {
  present(response: Result<TResult, TError>): void;
}
