import { Logger } from "../logger";
import { SystemMessage } from "../system-message";
import { RESULT_CODES } from "./result-codes";

const logger = new Logger(new SystemMessage());

type IOk<T> = {
	ok: true,
	value: T
}

type IFail = {
	ok: false,
	code: string
}

export type IResult<T> = IOk<T> | IFail;

export class Result {
	public static readonly messages = RESULT_CODES;

	public static createCodes<P extends Uppercase<string>, M extends readonly Uppercase<string>[]>(prefix: P, messages: M) {
		const newMessages = [
			...messages.map((message): `${P}:${M[number]}` => `${prefix}:${message}`),
		];

		const alreadyExists = newMessages.some(message => Result.messages.includes(message as typeof Result["messages"][number]));
		if (alreadyExists) logger.log("ERROR", `Result->createMessages: prefix ${prefix} already exists`);

		return newMessages;
	}

	public static ok<T>(value: T): IOk<T> {
		return {
			ok: true,
			value,
		};
	}

	public static okUnexpected<T>(value: T, code: typeof Result["messages"][number]): IOk<T> {
		logger.log("INFO", `Result->okUnexpected: ${code}`);
		return {
			ok: true,
			value,
		};
	}

	public static fail(code: typeof Result["messages"][number]): IFail {
		logger.log("WARN", `Result->fail: ${code}`);
		return {
			ok: false,
			code,
		};
	}
}

