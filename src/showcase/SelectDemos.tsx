import { useState } from "react";
import { Form } from "@base-ui/react/form";
import { Button, Field, Select } from "../ui";

const fruits = {
    apple: "Apple",
    banana: "Banana",
    blueberry: "Blueberry",
    grapes: "Grapes",
    pineapple: "Pineapple",
};

export function ControlledSelectDemo() {
    const [value, setValue] = useState<string | null>("banana");
    return (
        <div className="flex items-center gap-3 text-sm">
            <Select items={fruits} value={value} onValueChange={setValue}>
                <Select.Trigger className="w-44" aria-label="Fruit">
                    <Select.Value placeholder="Pick a fruit" />
                </Select.Trigger>
                <Select.Content>
                    {Object.entries(fruits).map(([key, label]) => (
                        <Select.Item key={key} value={key}>{label}</Select.Item>
                    ))}
                </Select.Content>
            </Select>
            <Button variant="ghost" onClick={() => setValue(null)}>Clear</Button>
            <code className="text-xs text-muted">{JSON.stringify(value)}</code>
        </div>
    );
}

const toppings = {
    cheese: "Cheese",
    mushrooms: "Mushrooms",
    olives: "Olives",
    onions: "Onions",
    peppers: "Peppers",
};

export function MultipleSelectDemo() {
    const [value, setValue] = useState<string[]>(["cheese", "olives"]);
    return (
        <div className="flex items-center gap-3 text-sm">
            <Select items={toppings} multiple value={value} onValueChange={setValue}>
                <Select.Trigger className="w-56" aria-label="Toppings">
                    <Select.Value placeholder="No toppings">
                        {(selected: string[]) =>
                            selected.length === 0
                                ? "No toppings"
                                : selected.length <= 2
                                  ? selected.map((v) => toppings[v as keyof typeof toppings]).join(", ")
                                  : `${selected.length} toppings`
                        }
                    </Select.Value>
                </Select.Trigger>
                <Select.Content>
                    {Object.entries(toppings).map(([key, label]) => (
                        <Select.Item key={key} value={key}>{label}</Select.Item>
                    ))}
                </Select.Content>
            </Select>
            <code className="text-xs text-muted">{JSON.stringify(value)}</code>
        </div>
    );
}

const roles = { viewer: "Viewer", editor: "Editor", admin: "Admin" };

export function FormSelectDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        // Base UI's Form validates on submit; with a plain <form>, Field only reports
        // `valueMissing` after the value has changed.
        <Form
            className="flex w-full max-w-xs flex-col gap-4 text-sm"
            onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}
        >
            <Field name="role">
                <Field.Label>Role</Field.Label>
                <Select items={roles} required>
                    <Select.Trigger>
                        <Select.Value placeholder="Select a role" />
                    </Select.Trigger>
                    <Select.Content>
                        {Object.entries(roles).map(([key, label]) => (
                            <Select.Item key={key} value={key}>{label}</Select.Item>
                        ))}
                    </Select.Content>
                </Select>
                <Field.Description>Required.</Field.Description>
                <Field.Error match="valueMissing">Pick a role.</Field.Error>
            </Field>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </Form>
    );
}
