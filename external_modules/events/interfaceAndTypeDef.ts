import { AsyncResource } from "async_hooks";
import { EventEmitterAsyncResource } from "events";


export interface Abortable {
    /**
     * When provided the corresponding `AbortController` can be used to cancel an asynchronous action.
     */
    signal?: AbortSignal | undefined;
}

export interface EventEmitterReferencingAsyncResource extends AsyncResource {
    readonly eventEmitter: EventEmitterAsyncResource;
}