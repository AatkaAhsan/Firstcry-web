
export default async function getdata(url){
     let response = await fetch(url);
     let result = await response.json();
     return result;
} 