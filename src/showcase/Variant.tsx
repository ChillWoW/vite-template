import type { ReactNode } from "react";

export function Variant({ label, children }: { label: string; children: ReactNode }) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-xs font-medium uppercase tracking-wide text-muted">{label}</h3>
            <div className="flex flex-wrap items-center gap-6 rounded-md border border-border bg-surface p-6">
                {children}
            </div>
        </section>
    );
}
