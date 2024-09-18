using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using System.Threading.Tasks;

public class LoggingMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger<LoggingMiddleware> _logger;

    public LoggingMiddleware(RequestDelegate next, ILogger<LoggingMiddleware> logger)
    {
        _next = next;
        _logger = logger;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Log request details
        var stopwatch = new Stopwatch();
        stopwatch.Start();

        _logger.LogInformation($"Incoming request: {context.Request.Method} {context.Request.Path}");

        // Call the next middleware in the pipeline
        await _next(context);

        // Log response details
        stopwatch.Stop();
        _logger.LogInformation($"Outgoing response: {context.Response.StatusCode} - Time Taken: {stopwatch.ElapsedMilliseconds} ms");
    }
}
