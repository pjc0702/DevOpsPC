declare module '@opentelemetry/api' {
  export const diag: any;
  export const propagation: any;
  export const context: any;
  export const trace: any;
  export const metrics: any;
  export const baggage: any;
  export const ROOT_CONTEXT: any;
}

declare module '@opentelemetry/api/*' {
  const value: any;
  export default value;
}

declare module '@opentelemetry/resources' {
  export class Resource {
    constructor(attributes?: Record<string, unknown>);
  }
}

declare module '@opentelemetry/semantic-conventions' {
  export const SemanticResourceAttributes: Record<string, string>;
}

declare module '@opentelemetry/sdk-trace-base' {
  export class ConsoleSpanExporter {}
  export class SimpleSpanProcessor {
    constructor(exporter: any);
  }
  export class BatchSpanProcessor {
    constructor(exporter: any);
  }
}

declare module '@opentelemetry/sdk-trace-web' {
  export class WebTracerProvider {
    constructor(options?: any);
    register(options?: any): void;
    addSpanProcessor(processor: any): void;
  }
}

declare module '@opentelemetry/exporter-trace-otlp-http' {
  export class OTLPTraceExporter {
    constructor(options?: any);
  }
}

declare module '@opentelemetry/context-zone-peer-dep' {
  export class ZoneContextManager {}
}

declare module '@opentelemetry/instrumentation' {
  export function registerInstrumentations(options?: any): void;
}

declare module '@opentelemetry/instrumentation-fetch' {
  export class FetchInstrumentation {
    constructor(options?: any);
  }
}

declare module '@opentelemetry/instrumentation-xml-http-request' {
  export class XMLHttpRequestInstrumentation {
    constructor(options?: any);
  }
}
