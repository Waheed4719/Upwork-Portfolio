import React from "react";

const Form = () => {
  const [name, setName] = React.useState({ value: "", error: false });
  const [email, setEmail] = React.useState({ value: "", error: false });
  const [message, setMessage] = React.useState({ value: "", error: false });

  const checkEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.value || !email.value || !message.value) {
      alert("Please fill out all fields");
      return;
    }

    if (!checkEmail(email.value)) {
      alert("Please enter a valid email address");
      return;
    }
    e.target.submit();
  };

  return (
    <div className="flex-col flex flex-1 justify-center">
      <h1 className="text-white mb-4 text-center">Contact Form</h1>
      <form
        target="_blank"
        action="https://formsubmit.co/your@email.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-4 items-center">
          <div className="border border-1 h-[60px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
            <input
              type="text"
              name="name"
              required
              value={name.value}
              onChange={(e) => setName({ value: e.target.value, error: false })}
              placeholder="Full Name"
              className="h-[60px] w-[400px]  max-w-full bg-transparent px-4 "
            />
          </div>
          <div className="border border-1 h-[60px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
            <input
              placeholder="Email Address"
              type="email"
              value={email.value}
              required
              onChange={(e) =>
                setEmail({ value: e.target.value, error: false })
              }
              name="email"
              className="h-[60px] w-[400px]  max-w-full bg-transparent px-4"
            />
          </div>
          <div className="border border-1 h-fit min-h-[120px] pt-[20px] w-[400px] max-w-full hover:border-[rgba(255,255,255,0.4)]">
            <textarea
              placeholder="Your Message"
              required
              value={message.value}
              onChange={(e) =>
                setMessage({ value: e.target.value, error: false })
              }
              name="message"
              rows="10"
              className="h-full w-[400px] max-w-full min-h-[120px]  bg-transparent px-4 text-white"
            />
          </div>
          <button
            type="submit"
            className="h-[60px] w-[400px] max-w-full border border-1 hover:border-[rgba(255,255,255,0.4)] cursor-pointer "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
