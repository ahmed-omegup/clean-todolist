export type Controller<TRequest> = {
  handle(request: TRequest): void;
};
