import type {Dispatch, SetStateAction} from "react";

declare global
{
    type SetState<T> = Dispatch<SetStateAction<T>>;
    function assert(condition: unknown, message?: string): asserts condition;
}

export function assert (condition: unknown, message: string = "Assertion failed"): asserts condition
{
    if (!condition)
    {
        throw new Error(message);
    }
}

export {};
