import { ITodo } from "@/interfaces/todo";

export const LITTLE_TODO_RESULT_CODES = Result.createCodes("LITTLE_TODO", [
	"CANNOT_CREATE_TITLE_TOO_SHORT",
	"CANNOT_CREATE_TITLE_TOO_LONG",
	"CANNOT_CREATE_DESCRIPTION_TOO_SHORT",
	"CANNOT_CREATE_DESCRIPTION_TOO_LONG",
	"CANNOT_UPDATE_TITLE_TOO_SHORT",
	"CANNOT_UPDATE_TITLE_TOO_LONG",
	"CANNOT_UPDATE_DESCRIPTION_TOO_SHORT",
	"CANNOT_UPDATE_DESCRIPTION_TOO_LONG",
]);

export class LittleTodo implements ITodo {
	private constructor(
		private _title: string,
		private _description: string,
		private _completed: boolean,
	) {}

	public get title(): string {
		return this._title;
	}

	public get description(): string {
		return this._description;
	}

	public get completed(): boolean {
		return this._completed;
	}

	public setTitle(title: string): IResult<string> {
		if (!LittleTodo._validateTitleMinLength(title)) return Result.fail("LITTLE_TODO:CANNOT_UPDATE_TITLE_TOO_SHORT");
		if (!LittleTodo._validateTitleMaxLength(title)) return Result.fail("LITTLE_TODO:CANNOT_UPDATE_TITLE_TOO_LONG");

		this._title = title;
		return Result.ok(title);
	}

	public setDescription(description: string): IResult<string> {
		if (!LittleTodo._validateDescriptionMinLength(description)) return Result.fail("LITTLE_TODO:CANNOT_UPDATE_DESCRIPTION_TOO_SHORT");
		if (!LittleTodo._validateDescriptionMaxLength(description)) return Result.fail("LITTLE_TODO:CANNOT_UPDATE_DESCRIPTION_TOO_LONG");

		this._description = description;
		return Result.ok(description);
	}

	public setCompleted(completed: boolean): void {
		this._completed = completed;
	}

	private static _validateTitleMinLength(title: string): boolean {
		const MIN_LENGTH = 3;
		return title.length >= MIN_LENGTH;
	}

	private static _validateTitleMaxLength(title: string): boolean {
		const MAX_LENGTH = 50;
		return title.length <= MAX_LENGTH;
	}

	private static _validateDescriptionMinLength(description: string): boolean {
		const MIN_LENGTH = 10;
		return description.length >= MIN_LENGTH;
	}

	private static _validateDescriptionMaxLength(description: string): boolean {
		const MAX_LENGTH = 200;
		return description.length <= MAX_LENGTH;
	}

	public static create(title: string, description: string, completed: boolean): IResult<LittleTodo> {
		if (!this._validateTitleMinLength(title)) return Result.fail("LITTLE_TODO:CANNOT_CREATE_TITLE_TOO_SHORT");
		if (!this._validateTitleMaxLength(title)) return Result.fail("LITTLE_TODO:CANNOT_CREATE_TITLE_TOO_LONG");
		if (!this._validateDescriptionMinLength(description)) return Result.fail("LITTLE_TODO:CANNOT_CREATE_DESCRIPTION_TOO_SHORT");
		if (!this._validateDescriptionMaxLength(description)) return Result.fail("LITTLE_TODO:CANNOT_CREATE_DESCRIPTION_TOO_LONG");

		return Result.ok(new LittleTodo(
			title,
			description,
			completed,
		));
	}
}
