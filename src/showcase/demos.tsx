import type { ReactNode } from "react";
import { PlusIcon, TrashIcon } from "@phosphor-icons/react";
import { Button, Input, Spinner } from "../ui";
import { Variant } from "./Variant";

export interface Demo {
    name: string;
    render: () => ReactNode;
}

// Add new components here; the sidebar picks them up automatically.
export const demos: Demo[] = [
    {
        name: "Button",
        render: () => (
            <>
                <Variant label="Variants">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="destructive-outline">Destructive outline</Button>
                    <Button variant="link">Link</Button>
                </Variant>
                <Variant label="Sizes">
                    <Button size="xs">Extra small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra large</Button>
                </Variant>
                <Variant label="Icon sizes">
                    <Button size="icon-xs" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-sm" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-md" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-lg" aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-xl" aria-label="Add"><PlusIcon /></Button>
                </Variant>
                <Variant label="With icon">
                    <Button><PlusIcon />New item</Button>
                    <Button variant="outline"><PlusIcon />New item</Button>
                    <Button variant="destructive"><TrashIcon />Delete</Button>
                    <Button variant="destructive-outline"><TrashIcon />Delete</Button>
                </Variant>
                <Variant label="Loading">
                    <Button size="xs" loading>Saving</Button>
                    <Button size="sm" loading>Saving</Button>
                    <Button size="md" loading>Saving</Button>
                    <Button size="lg" loading>Saving</Button>
                    <Button size="xl" loading>Saving</Button>
                    <Button size="icon-md" variant="outline" loading aria-label="Add"><PlusIcon /></Button>
                    <Button size="icon-xl" variant="secondary" loading aria-label="Add"><PlusIcon /></Button>
                </Variant>
                <Variant label="Disabled">
                    <Button disabled>Default</Button>
                    <Button variant="secondary" disabled>Secondary</Button>
                    <Button variant="outline" disabled>Outline</Button>
                    <Button variant="destructive" disabled>Destructive</Button>
                    <Button variant="destructive-outline" disabled>Destructive outline</Button>
                </Variant>
            </>
        ),
    },
    {
        name: "Input",
        render: () => (
            <>
                <Variant label="Sizes">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input size="xs" placeholder="Extra small" />
                        <Input size="sm" placeholder="Small" />
                        <Input size="md" placeholder="Medium" />
                        <Input size="lg" placeholder="Large" />
                        <Input size="xl" placeholder="Extra large" />
                    </div>
                </Variant>
                <Variant label="Types">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input type="email" placeholder="name@example.com" />
                        <Input type="password" defaultValue="hunter22" />
                        <Input type="number" placeholder="0" />
                        <Input type="search" placeholder="Search..." />
                        <Input type="file" />
                    </div>
                </Variant>
                <Variant label="States">
                    <div className="flex w-full max-w-xs flex-col gap-3">
                        <Input defaultValue="Filled" />
                        <Input placeholder="Disabled" disabled />
                        <Input defaultValue="Read only" readOnly />
                        <Input defaultValue="Invalid" aria-invalid />
                    </div>
                </Variant>
                <Variant label="With button">
                    <div className="flex w-full max-w-sm gap-2">
                        <Input type="email" placeholder="name@example.com" />
                        <Button>Subscribe</Button>
                    </div>
                </Variant>
            </>
        ),
    },
    {
        name: "Spinner",
        render: () => (
            <>
                <Variant label="Sizes">
                    <Spinner size="xs" />
                    <Spinner size="sm" />
                    <Spinner size="md" />
                    <Spinner size="lg" />
                    <Spinner size="xl" />
                </Variant>
                <Variant label="Colors">
                    <Spinner />
                    <Spinner className="text-accent" />
                    <Spinner className="text-info" />
                    <Spinner className="text-success" />
                    <Spinner className="text-warning" />
                    <Spinner className="text-danger" />
                </Variant>
            </>
        ),
    },
];
