import React, { useState, useEffect } from 'react';



useEffect(() => {
    // return this.http.post("https://dev.apphr.io/api/v1.0/users/login")
    fetch("https://dev.apphr.io/api/v1.0/users/login")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
        .catch((err) => {
           console.log(err.message);
        });
  }, []);

  export default signupService;

