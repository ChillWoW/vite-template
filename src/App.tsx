import { useEffect, useState } from "react";
import { cn } from "./lib/cn";
import { demos } from "./showcase/demos";

const slug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

function useHash() {
    const [hash, setHash] = useState(() => window.location.hash.slice(1));
    useEffect(() => {
        const onChange = () => setHash(window.location.hash.slice(1));
        window.addEventListener("hashchange", onChange);
        return () => window.removeEventListener("hashchange", onChange);
    }, []);
    return hash;
}

export default function App() {
    const hash = useHash();
    const active = demos.find((d) => slug(d.name) === hash) ?? demos[0];

    return (
        <div className="flex min-h-svh">
            <nav className="sticky top-0 flex h-svh w-56 shrink-0 flex-col gap-1 overflow-y-auto border-r border-border bg-surface p-3">
                <p className="px-3 pt-1 pb-3 text-xs font-medium uppercase tracking-wide text-muted">
                    Components
                </p>
                {demos.map((demo) => (
                    <a
                        key={demo.name}
                        href={`#${slug(demo.name)}`}
                        className={cn(
                            "rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:bg-hover hover:text-text",
                            demo === active && "bg-raised text-text",
                        )}
                    >
                        {demo.name}
                    </a>
                ))}
            </nav>
            <main className="flex min-w-0 flex-1 flex-col gap-8 p-10">
                <h1 className="text-2xl font-semibold tracking-tight">{active.name}</h1>
                {active.render()}
            </main>
        </div>
    );
}
