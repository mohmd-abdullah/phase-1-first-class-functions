function receivesAFunction(callback) {
    // Call the provided function
    callback();
  }
  
  function returnsANamedFunction() {
    // Return a named function
    return function namedFunction() {
      // Function body
    };
  }
  
  function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
      // Function body
    };
  }
