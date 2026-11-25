import { useState } from "react";
import { Field, Textarea } from "../ui";

const MAX = 140;

export function CharacterCountTextareaDemo() {
    const [value, setValue] = useState("");
    return (
        <Field className="max-w-sm">
            <Field.Label>Status</Field.Label>
            <Textarea
                value={value}
                onValueChange={setValue}
                maxLength={MAX}
                placeholder="What are you working on?"
            />
            <Field.Description className="self-end tabular-nums">
                {value.length}/{MAX}
            </Field.Description>
        </Field>
    );
}
