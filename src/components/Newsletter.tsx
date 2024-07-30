const Newsletter = () => {
  return (
    <section className="relative mt-28">
      <div className="container absolute left-1/2 top-8 -translate-x-1/2 md:top-14">
        <div className="mx-auto max-w-6xl rounded-lg bg-primary-100 px-8 py-9 text-center">
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold">Get early access today</h2>
            <p className="max-w-3xl mx-auto">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <form
            className="max-w-3xl m-auto flex flex-col gap-5 md:flex-row md:items-center justify-between md:gap-4"
            action="https://example.com"
            method="post"
          >
            <div className="w-full">
              <input
                className="h-[45px] w-full rounded-full pl-4 text-black outline-none text-sm"
                type="email"
                placeholder="email@example.com"
              />
              <p className="font-bold hidden mt-2 text-accent-300">
                Please enter a valid email address
              </p>
            </div>
            <button
              className="w-full md:max-w-max text-sm relative rounded-full bg-gradient-to-tr from-accent-100 to-accent-200 px-12 py-3 font-bold text-white after:absolute after:left-0 after:top-0 after:h-full after:w-full after:rounded-full after:bg-white after:bg-opacity-0 after:transition-all after:duration-300 after:hover:bg-opacity-40"
              type="submit"
            >
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
