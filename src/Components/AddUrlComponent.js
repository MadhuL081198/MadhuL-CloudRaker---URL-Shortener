import React, { useState } from 'react'
import axios from "axios";

const AddUrlComponent = () => {
    const [url, setUrl] = useState("");

    //Function to generate the short URL and add the data to the database
    const onSubmit = (e)=> {
        e.preventDefault();
        if (!url) {
          alert("please enter something");
          return;
        }

        axios
          .post("http://localhost:3333/short", {origUrl: url})
          .then(res => {
            console.log(res.data);
          })
          .catch(err => {
            console.log(err.message);
          });

        setUrl("")
    }
    console.log(url)

  return (
    <div>
      <main>
        <section className="flex flex-col justify-center items-center">
          <h1 className="text-sky-500 text-3xl mb-4">Cloudraker <span className="text-yellow-500">URL Shortener</span></h1>
          <form className="flex flex-col justify-center items-center" onSubmit={onSubmit}>
            <input
              className="border border-slate-700 w-96 h-12 rounded pl-4"
              type="text"
              placeholder="http://samplesite.com"
              value={url}
              onChange={e => setUrl(e.target.value)}
            />
            <div class="">
            <button type="submit" className="bg-sky-500 text-white py-2 px-4 rounded my-6">
              Shorten!
            </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddUrlComponent;