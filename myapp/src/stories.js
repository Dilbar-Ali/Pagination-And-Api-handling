import React, { useEffect } from "react";

function stories() {
    let isloding=true;
  let API = "http://hn.algolia.com/api/v1/search_by_date?query=html";

  const fetcApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
     isloding=false;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    fetcApiData(API);
  },[]);
  if(isloding){ 
  return (
    <div>
      <h2>Loding ...</h2>
    </div>
  );}
}

export default stories;
