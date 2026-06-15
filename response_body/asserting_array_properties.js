//check if any array is empty and if it contains perticular items:
/*THE EXAMPLE STRUCTURE:
{
"id":1,
"name":"john",
"phone":"1234567890",
"courses":["java", "selenium"]
}
*/

//THE TESTING CODE:
pm.test("Test array properties", () =>
  {
    //courses include "java"
    pm.expect("jsonData.courses").to.include("java");

    //courses array must include all listed
    pm.expect(jsonData.courses).to.have.members(["java", "selenium"]);
  }  
);
