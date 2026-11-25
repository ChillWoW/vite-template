import { useState } from "react";
import { Button, Field, NumberField } from "../ui";

export function ControlledNumberFieldDemo() {
    const [value, setValue] = useState<number | null>(3);
    return (
        <div className="flex items-center gap-3 text-sm">
            <NumberField
                aria-label="Quantity"
                min={0}
                max={10}
                value={value}
                onValueChange={setValue}
                className="w-32"
            />
            <span className="text-muted">Value: {value ?? "empty"}</span>
            <Button variant="ghost" size="xs" onClick={() => setValue(0)}>Reset</Button>
        </div>
    );
}

export function FormNumberFieldDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        <form
            className="flex w-full max-w-xs flex-col gap-4 text-sm text-text"
            onSubmit={(event) => {
                event.preventDefault();
                const data: Record<string, FormDataEntryValue> = {};
                new FormData(event.currentTarget).forEach((value, key) => (data[key] = value));
                setSubmitted(JSON.stringify(data));
            }}
        >
            <Field>
                <Field.Label>Guests</Field.Label>
                <NumberField name="guests" defaultValue={2} min={1} max={8} />
            </Field>
            <Field>
                <Field.Label>Budget</Field.Label>
                <NumberField
                    name="budget"
                    defaultValue={250}
                    step={50}
                    min={0}
                    format={{ style: "currency", currency: "EUR", maximumFractionDigits: 0 }}
                />
            </Field>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
