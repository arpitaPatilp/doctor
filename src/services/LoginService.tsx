import React from "react";
import axios from 'axios';
const LoginService=(props: any[])=>{
    const backendUrl: string = 'https://psl-test2-b8593d29856b.herokuapp.com/api/v1/session';
    
    try {
      const response=axios.post(backendUrl, {
        "user": {
          "email":"admin2@admin.com",
          "password":"admin61113",
          "role":"admin"
      }
      })
      .then(response => {
        if (response.data.accessToken) {
         // localStorage.setItem("user", JSON.stringify(response.data));
          console.log(JSON.stringify(response.data));
        }
        console.log(JSON.stringify(response.data));
      })
      return response;
    }
     catch (error) {
      console.log(error)
    }
  };

export default LoginService;