class InternalServerError {
  constructor() {
    this.error = 'internal_server_error';
    this.status_code = 500;
    this.error_description = 'Internal server error';
  }
}

export default new InternalServerError();
