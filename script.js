//Register User
document.getElementById("registerForm").addEventListener("submit", function(event) {
     event.preventDefault();

      let username = document.getElementById("regUsername").value;
      let password = document.getElementById("regPassword").value;

      if(username === "" || password === "") {
        alert("All files are required!");
        return;
      }

     let users = JSON.parse(localStorage.getItem("users")) || [];

     let userExists = users.some(user => user.username === username);
     if(userExists) {
        alert("Username already taken!");
        return;
     }

     user.push({username,password });
     localStorage.setItem("users",JSON.stringify(users));

     alert("Registration Successfull! You can now log in.");
     document.getElementById("registerform").reset();


    });  


//Login User
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();


    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        message.style.color = "green";
        message.textContent = "Login successfull!";
    }
      else{
        
            message.style.color = "red";
            message.textContent = "Invalid username or passaword!";
        }

        
        document.getElementById("loginForm").reset();
    }
   
});

