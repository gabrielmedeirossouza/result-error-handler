export interface ISystemMessage {
	send(level: "INFO" | "WARN" | "ERROR", message: string): void
}

export class SystemMessage implements ISystemMessage {
	public send(level: "INFO" | "WARN" | "ERROR", message: string): void {
		const LEVEL_TYPES = {
			INFO: "info",
			WARN: "warn",
			ERROR: "error",
		} as const;

		console[LEVEL_TYPES[level]](`System message\n${message}`);
	}
}
