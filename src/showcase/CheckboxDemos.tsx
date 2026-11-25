import { useState } from "react";
import { Button, Checkbox } from "../ui";

export function ControlledCheckboxDemo() {
    const [checked, setChecked] = useState(false);
    return (
        <div className="flex items-center gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-2.5 text-text">
                <Checkbox checked={checked} onCheckedChange={setChecked} />
                Remember me
            </label>
            <span className="text-muted">({checked ? "checked" : "unchecked"})</span>
        </div>
    );
}

const toppings = { cheese: "Cheese", mushrooms: "Mushrooms", olives: "Olives", peppers: "Peppers" };

export function ParentCheckboxDemo() {
    const [value, setValue] = useState<string[]>(["cheese"]);
    return (
        <Checkbox.Group
            aria-labelledby="toppings-label"
            value={value}
            onValueChange={setValue}
            allValues={Object.keys(toppings)}
            className="text-sm text-text"
        >
            <label id="toppings-label" className="flex cursor-pointer items-center gap-2.5 font-medium">
                <Checkbox parent />
                Toppings
            </label>
            {Object.entries(toppings).map(([key, label]) => (
                <label key={key} className="ml-6 flex cursor-pointer items-center gap-2.5">
                    <Checkbox value={key} />
                    {label}
                </label>
            ))}
        </Checkbox.Group>
    );
}

export function FormCheckboxDemo() {
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
            <label className="flex cursor-pointer items-center gap-2.5">
                <Checkbox name="newsletter" defaultChecked />
                Newsletter
            </label>
            <label className="flex cursor-pointer items-center gap-2.5">
                <Checkbox name="tracking" value="allow" uncheckedValue="deny" />
                Allow analytics
            </label>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
