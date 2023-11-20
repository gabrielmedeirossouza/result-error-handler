export interface ITodo {
	readonly title: string;
	readonly description: string;
	readonly completed: boolean;
	setTitle(title: string): Result<void>;
	setDescription(description: string): Result<void>;
	setCompleted(completed: boolean): void;
}
