declare const require: any;

const { ZoneContextManager } = require('@opentelemetry/context-zone-peer-dep');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { FetchInstrumentation } = require('@opentelemetry/instrumentation-fetch');
const { XMLHttpRequestInstrumentation } = require('@opentelemetry/instrumentation-xml-http-request');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ConsoleSpanExporter, SimpleSpanProcessor, BatchSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { WebTracerProvider } = require('@opentelemetry/sdk-trace-web');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');

import { environment } from './environments/environment';

const endpoint = environment.otlpEndpoint ?? 'http://localhost:4318';

const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes['SERVICE_NAME']]: 'devops-pc-web',
    [SemanticResourceAttributes['SERVICE_VERSION']]: '1.0.0',
  }),
});

provider.addSpanProcessor(
  new BatchSpanProcessor(
    new OTLPTraceExporter({
      url: `${endpoint}/v1/traces`,
    })
  )
);

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

provider.register({
  contextManager: new ZoneContextManager(),
});

registerInstrumentations({
  instrumentations: [
    new FetchInstrumentation({ clearTimingResources: true }),
    new XMLHttpRequestInstrumentation(),
  ],
});
