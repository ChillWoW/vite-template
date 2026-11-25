import { Form } from "@base-ui/react/form";
import { useState } from "react";
import { Button, Field, Radio } from "../ui";

type Shipping = "standard" | "express" | "overnight";

const shipping: Record<Shipping, string> = { standard: "Standard", express: "Express", overnight: "Overnight" };

export function ControlledRadioDemo() {
    const [value, setValue] = useState<Shipping>("standard");
    return (
        <div className="flex items-start gap-6 text-sm">
            <Radio.Group<Shipping> value={value} onValueChange={setValue} aria-label="Shipping" className="text-text">
                {Object.entries(shipping).map(([key, label]) => (
                    <label key={key} className="flex cursor-pointer items-center gap-2.5">
                        <Radio value={key} />
                        {label}
                    </label>
                ))}
            </Radio.Group>
            <code className="text-xs text-muted">{JSON.stringify(value)}</code>
        </div>
    );
}

export function ValidationRadioDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        // Base UI's Form validates on submit; with a plain <form>, Field only reports
        // `valueMissing` after the value has changed.
        <Form
            className="flex flex-col gap-3 text-sm text-text"
            onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}
        >
            <Field name="plan" className="gap-2">
                <span id="plan-label" className="text-sm font-medium">Plan</span>
                <Radio.Group required aria-labelledby="plan-label">
                    {["Free", "Pro", "Team"].map((plan) => (
                        <label key={plan} className="flex cursor-pointer items-center gap-2.5">
                            <Radio value={plan.toLowerCase()} />
                            {plan}
                        </label>
                    ))}
                </Radio.Group>
                <Field.Error match="valueMissing">Pick a plan.</Field.Error>
            </Field>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Continue</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </Form>
    );
}

export function FormRadioDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        <form
            className="flex flex-col gap-3 text-sm text-text"
            onSubmit={(event) => {
                event.preventDefault();
                const data: Record<string, FormDataEntryValue> = {};
                new FormData(event.currentTarget).forEach((value, key) => (data[key] = value));
                setSubmitted(JSON.stringify(data));
            }}
        >
            <Radio.Group name="density" defaultValue="comfortable" aria-label="Density">
                {["Compact", "Comfortable", "Spacious"].map((d) => (
                    <label key={d} className="flex cursor-pointer items-center gap-2.5">
                        <Radio value={d.toLowerCase()} />
                        {d}
                    </label>
                ))}
            </Radio.Group>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
