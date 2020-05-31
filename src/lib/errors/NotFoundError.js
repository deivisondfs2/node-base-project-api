class NotFoundError {
  constructor(message = 'Not Found') {
    this.error = 'not_found';
    this.status_code = 404;
    this.message = message;
  }
}

export default NotFoundError;
