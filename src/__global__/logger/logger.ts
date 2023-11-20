import { ISystemMessage } from "../system-message/system-message";

type ILog = {
	level: "INFO" | "WARN" | "ERROR",
	message: string
}

export interface ILogger {
	readonly pool: ReadonlyArray<ILog>,
	log(level: "INFO" | "WARN" | "ERROR", message: string): void
}

export class Logger implements ILogger {
	private _pool: ILog[] = [];

	constructor(
		private _systemMessage: ISystemMessage,
		private _limit = 10000,
	) {}

	public get pool(): ReadonlyArray<ILog> {
		return this._pool;
	}

	public log(level: "INFO" | "WARN" | "ERROR", message: string): void {
		if (this._pool.length >= this._limit) {
			this._pool.shift();
		}

		this._systemMessage.send(level, message);
		this._pool.push({ level, message });
	}
}
