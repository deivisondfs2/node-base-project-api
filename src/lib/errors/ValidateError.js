class ValidateError {
  constructor(schemaErrors, name = 'Validation Error.', message = 'Some fields are not valid.') {
    this.name = name;
    this.message = message;
    this.status = 400;
    if (schemaErrors) this.schemaErrors = schemaErrors;
  }
}

export default ValidateError;
