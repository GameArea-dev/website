import {lazy as _lazy} from "react";

export function lazy(importFn: Function) {
    return _lazy(async () => {
        const m = await importFn();
        return { default: m.ReactComponent };
    });
}
