import { Result as _Result, IResult as _IResult } from "./result";
export {};

declare global {
	class Result<T> extends _Result<T> {}
	interface IResult<T> extends _IResult<T> {}
}
