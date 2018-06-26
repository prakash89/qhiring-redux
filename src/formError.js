import React, { Component } from 'react';

export const formError = (fieldName) => {

  let error = {}

  error[fieldName] = "Invalid {fieldName}"
  return error;
  // switch(fieldName) {
  //   case 'fname':
  //     error[''] = "Invalid first name"
  //     break;
  // }
}
