import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { raw, Response } from 'express';

@Catch() // Leaving this empty catches all unhandled exceptions, including 500s
export class InternalServerErrorFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    // Extract the raw message if it exists, otherwise use a fallback
    const rawMessage = exception instanceof Error 
      ? exception.message 
      : 'An unexpected internal server error occurred';

    // Determine the status code (default to 500 if not an explicit HttpException)
    const status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;

    console.log(rawMessage)
    response.status(status).json({
      statusCode: status,
      message: rawMessage.split("Argument ")[1], // This forwards the actual error details to the client
      error: exception.name || 'InternalServerError',
    });
  }
}
