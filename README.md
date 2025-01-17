# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB. The `$inc` operator is used to increment a numeric field in a document.  However, it can produce unexpected results or errors if not used correctly.  This example shows an incorrect usage and the correct solution.

## Bug Description
The provided code attempts to use `$inc` with a field that might not be a number, which causes unexpected behavior.  The correct approach is to validate the field type or explicitly handle non-numeric situations.

## Solution
The solution includes error handling and type checking before applying the `$inc` operator.  This ensures robustness and prevents unexpected errors.
