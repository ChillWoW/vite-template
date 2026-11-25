import { useState } from "react";
import { ListIcon, SquaresFourIcon, TableIcon } from "@phosphor-icons/react";
import { Button, SegmentedControl } from "../ui";

type View = "list" | "grid" | "table";

export function ControlledSegmentedControlDemo() {
    const [view, setView] = useState<View>("grid");
    return (
        <div className="flex items-center gap-3 text-sm">
            <SegmentedControl<View> value={view} onValueChange={setView} aria-label="View">
                <SegmentedControl.Item value="list"><ListIcon />List</SegmentedControl.Item>
                <SegmentedControl.Item value="grid"><SquaresFourIcon />Grid</SegmentedControl.Item>
                <SegmentedControl.Item value="table"><TableIcon />Table</SegmentedControl.Item>
            </SegmentedControl>
            <code className="text-xs text-muted">{JSON.stringify(view)}</code>
        </div>
    );
}

export function FormSegmentedControlDemo() {
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
            <SegmentedControl name="billing" defaultValue="yearly" aria-label="Billing period">
                <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
                <SegmentedControl.Item value="yearly">Yearly</SegmentedControl.Item>
            </SegmentedControl>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
