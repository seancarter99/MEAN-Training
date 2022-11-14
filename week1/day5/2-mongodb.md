# MongoDB

- Key/Value Storage
  - Stores as BSON (Binary JSON)
    - Binary representation of JSON
    - Serialized
    - Stores some metadata such as the type
  - MongoDB lives and breathes JavaScript
- Schemaless
  - Traditional SQL enforces a rigid schema, MongoDB does not
    - Makes it very easy to update the schema in the future

# Standard Terminology

- Collection (Table)
  - It is a collection of "documents"
- Document (Row)
- Field (Column)
- Lookup (Joining)

# Embedding vs Referencing

- Embedding
  - Taking some document, and sticking inside of another (sub-document)
  - Big benefit of embedding, is the read/write speed (no joins required)

- Referencing
  - Akin to joining in traditional SQL
  - Referencing is just a reference to another document's id
  - Big benefit of referencing, is preventing data duplication (normalizing data)
  - Lookups are very expensive in MongoDB (it is not built for this)

# Pros to Embedding
- Lightning fast read/write speed (on a single document)
  - In general, favor embedding to referencing

# Cons to Embedding
- The data is not normalized, so I may be storing duplicate data
- There is a document size limit in MongoDB (16 MB)
  - If I have a lot of data being embedded OR some array of objects, this can exceed the size limit
    - Caution against "unbounded arrays"

# Pros to Referencing
- Handles unbounded arrays exceptionally well
- Allows for data normalization

# Cons to Referencing
- Lookups are EXPENSIVE


# "Data that is accessed together should be stored together"

{
    name: "John",
    address: {
        city: "Chicago",
        state: "IL"
    }
}

{
    name: "Mary",
    address: {
        city: "Chicago",
        state: "IL"
    },
    friends: [234, 871, 92], // Lookup the friends,
    cars: [{
        make:
        model:
        year:
    }]
}