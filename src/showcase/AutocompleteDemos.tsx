import { useState } from "react";
import { Form } from "@base-ui/react/form";
import { Autocomplete, Button, Field } from "../ui";

const languages = ["Go", "JavaScript", "Kotlin", "Python", "Ruby", "Rust", "Swift", "TypeScript", "Zig"];

export function ControlledAutocompleteDemo() {
    const [value, setValue] = useState("Rust");
    return (
        <div className="flex items-center gap-3 text-sm">
            <Autocomplete items={languages} value={value} onValueChange={setValue}>
                <Autocomplete.Input className="w-52" placeholder="Language" aria-label="Language" />
                <Autocomplete.Content empty="No languages found.">
                    {(lang: string) => <Autocomplete.Item key={lang} value={lang}>{lang}</Autocomplete.Item>}
                </Autocomplete.Content>
            </Autocomplete>
            <Button variant="ghost" onClick={() => setValue("")}>Clear</Button>
            <code className="text-xs text-muted">{JSON.stringify(value)}</code>
        </div>
    );
}

const cities = ["Amsterdam", "Berlin", "Copenhagen", "Helsinki", "Lisbon", "London", "Madrid", "Oslo", "Paris", "Stockholm"];

export function FormAutocompleteDemo() {
    const [submitted, setSubmitted] = useState<string | null>(null);
    return (
        <Form
            className="flex w-full max-w-xs flex-col gap-4 text-sm"
            onFormSubmit={(values) => setSubmitted(JSON.stringify(values))}
        >
            <Field name="city">
                <Field.Label>City</Field.Label>
                <Autocomplete items={cities} required>
                    <Autocomplete.Input placeholder="Start typing a city" />
                    <Autocomplete.Content>
                        {(city: string) => <Autocomplete.Item key={city} value={city}>{city}</Autocomplete.Item>}
                    </Autocomplete.Content>
                </Autocomplete>
                <Field.Description>Any text is accepted; suggestions are optional.</Field.Description>
                <Field.Error match="valueMissing">Enter a city.</Field.Error>
            </Field>
            <div className="flex items-center gap-3">
                <Button type="submit" variant="outline">Submit</Button>
                {submitted && <code className="text-xs text-muted">{submitted}</code>}
            </div>
        </Form>
    );
}
