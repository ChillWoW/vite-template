import { useState } from "react";
import { Form } from "@base-ui/react/form";
import { PencilSimpleIcon } from "@phosphor-icons/react";
import { Button, Field, Input, Popover } from "../ui";

export function FormPopoverDemo() {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState("320");

    return (
        <div className="flex items-center gap-3 text-sm">
            <Popover open={open} onOpenChange={setOpen}>
                <Popover.Trigger render={<Button variant="outline" />}>
                    <PencilSimpleIcon />Edit width
                </Popover.Trigger>
                <Popover.Content align="start">
                    <Popover.Header>
                        <Popover.Title>Dimensions</Popover.Title>
                        <Popover.Description>Set the width of the layer.</Popover.Description>
                    </Popover.Header>
                    <Form
                        className="flex flex-col gap-3"
                        onSubmit={(event) => {
                            event.preventDefault();
                            setWidth(String(new FormData(event.currentTarget).get("width")));
                            setOpen(false);
                        }}
                    >
                        <Field>
                            <Field.Label>Width (px)</Field.Label>
                            <Input name="width" type="number" min={1} defaultValue={width} required />
                            <Field.Error match="valueMissing">Width is required.</Field.Error>
                        </Field>
                        <div className="flex justify-end gap-2">
                            <Popover.Close render={<Button variant="ghost" size="sm" />}>Cancel</Popover.Close>
                            <Button type="submit" size="sm">Apply</Button>
                        </div>
                    </Form>
                </Popover.Content>
            </Popover>
            <span className="text-muted">Width: {width}px</span>
        </div>
    );
}
