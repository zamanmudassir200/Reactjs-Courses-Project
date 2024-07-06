import React, { useState, useEffect } from "react";

const Eleven = () => {
  const [quote, setQuote] = useState(null);
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "Do not watch the clock. Do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don’t wait. The time will never be just right. - Napoleon Hill",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you really look closely, most overnight successes took a long time. - Steve Jobs",
    "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.",
    "Don’t be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
    "I failed my way to success. - Thomas Edison",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
    "Don’t be distracted by criticism. Remember – the only taste of success some people get is to take a bite out of you. - Zig Ziglar",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You know you are on the road to success if you would do your job and not be paid for it. - Oprah Winfrey",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "I never dreamed about success, I worked for it. - Estée Lauder",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James",
    "The successful warrior is the average man, with laser-like focus. - Bruce Lee",
    "Fall seven times and stand up eight. - Japanese Proverb",
    "When you go through hardships and decide not to surrender, that is strength. - Arnold Schwarzenegger",
    "It’s not whether you get knocked down, it’s whether you get up. - Vince Lombardi",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "You don’t have to be great to start, but you have to start to be great. - Zig Ziglar",
    "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The successful man will profit from his mistakes and try again in a different way. - Dale Carnegie",
    "Our greatest glory is not in never falling, but in rising every time we fall. - Confucius",
    "The secret of getting ahead is getting started. - Mark Twain",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "You are braver than you believe, stronger than you seem, and smarter than you think. - A.A. Milne",
    "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
    "A goal is not always meant to be reached; it often serves simply as something to aim at. - Bruce Lee",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  ];
  useEffect(() => {
    generateQuote(quotes);
  }, []);
  const generateQuote = (quotes) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="text-center my-5  mx-auto flex items-center justify-center h-screen px-4 flex-col gap-10">
      <h1 className="font-extrabold text-3xl">RANDOM QUOTE GENERATOR</h1>
      {quotes ? (
        <div className="max-w-[1000px] ">
          <h1 className="font-bold">"{quote}"</h1>
        </div>
      ) : (
        <div>Loading....</div>
      )}
      <button
        className="border-2 hover:bg-green-700 transition-all bg-green-900 rounded-lg text-white p-2"
        onClick={() => generateQuote(quotes)}
      >
        Generate Quote
      </button>
    </div>
  );
};

export default Eleven;
