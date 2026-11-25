import { useState } from "react";
import { Button, Switch } from "../ui";

export function ControlledSwitchDemo() {
    const [on, setOn] = useState(false);
    return (
        <div className="flex items-center gap-3 text-sm">
            <label className="flex cursor-pointer items-center gap-3 text-text">
                <Switch checked={on} onCheckedChange={setOn} />
                Airplane mode
            </label>
            <span className="text-muted">({on ? "on" : "off"})</span>
        </div>
    );
}

export function FormSwitchDemo() {
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
            <label className="flex cursor-pointer items-center gap-3">
                <Switch name="newsletter" defaultChecked />
                Newsletter
            </label>
            <label className="flex cursor-pointer items-center gap-3">
                <Switch name="theme" value="compact" uncheckedValue="comfortable" />
                Compact layout
            </label>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
