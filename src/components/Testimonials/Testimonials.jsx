import { useEffect } from "react";


export default function Testimonials() {
 
    const testimonials = [
      {
        name: 'Delighted Client',
        quote: 'Dira Investments has been a game-changer for our company. Highly recommended!',
      },
      {
        name: 'Happy Customer',
        quote: 'We are impressed by the expertise and insights provided by Dira Investments. They truly understand our industry.',
      },
      {
        name: 'Satisfied Client',
        quote: 'I highly recommend Dira Investments to anyone looking to expand their business in Africa. Their expertise and deep understanding of the local market have been instrumental in our growth and profitability.',
      },
    ];
  
    return (
        <div className="bg-custom-tan">
        <div className="text-center p-9" >
          <h2 className="text-4xl font-bold mb-4 text-white">Client Testimonials</h2>
          <p className="text-md mb-4 text-white">
            Straight From the Source
          </p>
        </div>
          <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 pb-5" >
        {testimonials.map((testimonial, index) => (
          <div className="mb-12 md:mb-0 bg-custom-gray m-2 rounded-md" key={index} >
            <div className="mb-6 flex justify-center ">
              <img
                src='https://tse1.mm.bing.net/th?id=OIP.JwEJgEC-hx43MR-2OJa_IQHaHw&pid=Api&P=0&h=180'
                alt={testimonial.name[0]}
                className="w-32 rounded-full shadow-lg dark:shadow-white/30 text-white m-2"
                // alt={`Avatar ${index + 1}`}
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold text-custom-tan">{testimonial.name}</h5>
            <p className="mb-4 text-custom-tan">{testimonial.quote}</p>
          </div>
        ))}
      </div>
      </div>
    );
  };

  