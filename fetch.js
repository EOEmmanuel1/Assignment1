
// REQUEST OPERATION

const fetchAllTodos = async ()=>{
  await fetch ('https://jsonplaceholder.typicode.com/users')
     .then(response => response.json())
     .then(json => console.log(json))
}

 fetchAllTodos()


const fetchAllcomments = async ()=>{
    await  ('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => console.log(json))
  }
  
(fetchAllcomments)


  const fetchAllUsers =  ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => console.log(json))
  }
  
  fetchAllUsers()

//   const a = 4
//   const b = 2
//   const c = a+b

//   console.log(c)