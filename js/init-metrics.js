function initMetrics() {
    const metricsCatalog = new MetricsCatalog({
        host: 'doganozturk.dev'
    });

    metricsCatalog.init();
}

initMetrics();
