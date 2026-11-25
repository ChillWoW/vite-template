import { useState } from "react";
import { SpeakerHighIcon, SpeakerLowIcon } from "@phosphor-icons/react";
import { Button, Slider } from "../ui";

export function ControlledSliderDemo() {
    const [value, setValue] = useState(40);
    const [committed, setCommitted] = useState(40);
    return (
        <div className="flex w-full max-w-sm flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 text-muted">
                <SpeakerLowIcon className="size-4 shrink-0" />
                <Slider
                    aria-label="Volume"
                    value={value}
                    onValueChange={setValue}
                    onValueCommitted={setCommitted}
                />
                <SpeakerHighIcon className="size-4 shrink-0" />
            </div>
            <div className="flex items-center gap-3">
                <span className="text-muted">Value: {value} · Committed: {committed}</span>
                <Button variant="ghost" size="xs" onClick={() => (setValue(40), setCommitted(40))}>Reset</Button>
            </div>
        </div>
    );
}

export function FormSliderDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        <form
            className="flex w-full max-w-xs flex-col gap-4 text-sm text-text"
            onSubmit={(event) => {
                event.preventDefault();
                // Range sliders submit one entry per thumb under the same name.
                const data: Record<string, FormDataEntryValue | FormDataEntryValue[]> = {};
                new FormData(event.currentTarget).forEach((value, key) => {
                    const prev = data[key];
                    data[key] = prev === undefined ? value : [prev, value].flat();
                });
                setSubmitted(JSON.stringify(data));
            }}
        >
            <Slider name="brightness" defaultValue={70}>
                <div className="flex w-full items-center justify-between">
                    <Slider.Label>Brightness</Slider.Label>
                    <Slider.Value />
                </div>
            </Slider>
            <Slider
                name="price"
                defaultValue={[20, 80]}
                step={5}
                minStepsBetweenValues={2}
                getAriaLabel={(i) => (i === 0 ? "Minimum price" : "Maximum price")}
                format={{ style: "currency", currency: "EUR", maximumFractionDigits: 0 }}
            >
                <div className="flex w-full items-center justify-between">
                    <Slider.Label>Price</Slider.Label>
                    <Slider.Value />
                </div>
            </Slider>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </form>
    );
}
