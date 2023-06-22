var person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    }
  };
  
  // Accessing properties of nested objects using dot notation
  console.log(person.name); // Output: John
  console.log(person.address.street); // Output: 123 Main St
  console.log(person.address.city); // Output: New York
  
  // Accessing properties of nested objects using bracket notation
  console.log(person['name']); // Output: John
  console.log(person['address']['street']); // Output: 123 Main St
  console.log(person['address']['city']); // Output: New York