const Contact = ()=>{
return(
    <div className="w6/12 text-center mt-28">
          <h1 className="font-bold text-3xl p-4 m-4">Contact Page</h1>
          
          <form>
            <input type="text" placeholder="name" className="border border-black p-2 m-2" />
            <input type="text" placeholder="message" className="border border-black p-2 m-2" />
            <button className="border border-black p-2 m-2">Submit</button>
          </form>
    </div>
);
};

export default Contact;


