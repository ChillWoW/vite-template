import type { ReactNode } from "react";
import { Spinner } from "../ui";
import { Variant } from "./Variant";

export interface Demo {
    name: string;
    render: () => ReactNode;
}

// Add new components here; the sidebar picks them up automatically.
export const demos: Demo[] = [
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
