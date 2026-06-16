//HERE'S THE BASIC EXAMPLE OF JSON SCHEMA:
/*The Response:
{
  "id": 1,
  "name": "john",
  "phone": "1234567890",
  "courses": ["java", "selenium"]
}*/

/*THE DATA TYPES:
| Field    | Type   |
| -------- | ------ |
| id       | Number |
| name     | String |
| phone    | String |
| courses  | Array  |
| java     | String |
| selenium | String |
*/

//JSON SCHEMA FOR THIS EXAMPLE::
{
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "phone": {
      "type": "string"
    },
    "courses": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "id",
    "name",
    "phone",
    "courses"
  ]
}

