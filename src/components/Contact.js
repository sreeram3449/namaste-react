const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input
          type="text"
          className="font-bold border border-black"
          placeholder="name"
        />
        <input
          type="text"
          className="font-bold border border-black"
          placeholder="message"
        />
        <button className="font-bold border border-black bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
