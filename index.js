import express from "express"
const app = express();
app.use(express.json())
const port = 8000;
let users = [
  {
    "id": 1,
    "name": "Alice Johnson",
    "position": "Software Engineer",
    "department": "Technology"
  },
  {
    "id": 2,
    "name": "Bob Smith",
    "position": "Project Manager",
    "department": "Operations"
  },
  {
    "id": 3,
    "name": "Charlie Brown",
    "position": "Data Analyst",
    "department": "Analytics"
  },
  {
    "id": 4,
    "name": "Diana Prince",
    "position": "Marketing Specialist",
    "department": "Marketing"
  },
  {
    "id": 5,
    "name": "Ethan Hunt",
    "position": "HR Coordinator",
    "department": "Human Resources"
  }
];
app.get("/" , (req, res) =>{
  res.json(users)

    // res.send(body);
});


app.get("/user/:id" , (req,res) =>{
    let id = req.params.id;
    let exitingUser = users.find((user )=> (user.id==id))
    res.json(exitingUser);
    console.log(exitingUser);
    
})
app.listen(port , () =>{
    console.log(`setver is stated at ${port}`);
    
})