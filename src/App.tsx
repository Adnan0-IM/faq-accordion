import star from "./assets/images/icon-star.svg";
import plus from "./assets/images/icon-plus.svg";
import minus from "./assets/images/icon-minus.svg";
import datas from "./data";
import { useState } from "react";

function App() {
  const [id, setId] = useState<number | null>(0);
  const showAnswer = (id: number) => {
    setId((prevId) => (prevId === id ? null : id));
  };
  return (
    <>
      <section className="min-h-screen grid place-content-center bg-light-pink bg-[url('./assets/images/background-pattern-mobile.svg')] md:bg-[url('./assets/images/background-pattern-desktop.svg')] bg-no-repeat bg-contain font-work-sans">
        <article className="font-work-sans bg-white p-6 m-6 rounded-xl max-w-[375px] sm:max-w-xl">
          <div className="flex gap-5 mb-4 items-center">
            <img src={star} alt="star" />
            <h1 className="text-3xl sm:text-5xl font-bold text-dark-purple">FAQs</h1>
          </div>
          {datas.map((data) => {
            return (
              <div
                key={data.question}
                className="py-4 border-b border-light-pink "
              >
                <div className="flex justify-between gap-6 ">
                  <h3 className="text-base sm:text-lg leading-5 font-semibold text-dark-purple">
                    {data.question}
                  </h3> 
                  <img
                    onClick={() => showAnswer(data.id)}
                    src={id === data.id ? minus : plus}
                    alt={id === data.id ? "minus icon" : "plus icon"}
                  />
                </div>
                <p
                  className={`text-sm sm:text-base mt-4 text-grayish-purple transition-all duration-300 ease-in-out overflow-hidden ${
                    id === data.id
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  } `}
                >
                  {data.answer}
                </p>
              </div>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default App;
