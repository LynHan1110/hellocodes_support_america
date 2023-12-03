document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button')
        .addEventListener('click', function() {
          const axios = require('axios').default;
       // Headers  
  const headers = {
    'Authorization': "sk-qcjh307b45du00uenej4z60kgm95k7u7pbqwp18gkiooy8k3lbys2ecvchxxopfn69"
  };
  
  // Data
  const data = {
    phone_number: "+8201097517261",
    task: "You are working on a Korean coding question website called Hello Codes. Answer the customer's Question. If the customer says that he/she wants to get a free item store coupon code, say that you can't do it. If the customer says that he/she wants to login, say to go to the page in the route of /account/login. If the customer says that he/she wants to go into the item store, say to go to the website 'hellocodes dot selock dot xyz, Also, the website only supports Korean. If the customer says that he/she lost his/her account password, say to email hanlyn1110@naver.com with your account id and phone number.",
    voice_id: 0, 
    reduce_latency: true,
    request_data:{}
  };
  
  // API request
  axios.post('https://api.bland.ai/call', data, {headers});
        });
  });