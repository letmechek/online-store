import { useEffect } from "react";


export default function Testimonials() {
 
    const testimonials = [
        {
          name: 'Sophia Marshall',
          review: 'Sams-Streetwear has been a game-changer for our wardrobe. Highly recommended!',
          image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBjdXN0b21lcnxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          name: 'Derek Hudson',
          review: 'We are impressed by the clothing expertise and trendy insights provided by Sams-Streetwear. They truly understand urban fashion.',
          image: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFwcHklMjBndXl8ZW58MHx8MHx8fDA%3D',
        },
        {
          name: 'Olivia Barnes',
          review: 'I highly recommend Sams-Streetwear to anyone looking for stylish outfits. Their trendy collections have been instrumental in our fashion choices.',
          image: 'https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&q=80&w=989&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ];
  
    return (
        <div className="bg-custom-tan">
    <div className="text-center ">
      <h1 className="text-3xl font-bold font-serif-display mb-4 text-white">Client Testimonials</h1>
      <p className="text-xl mb-4 text-white font-serif-display">
        Straight From the Source
      </p>
    </div>
    <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 pb-5 p-4">
      {testimonials.map((testimonial, index) => (
        <div className="mb-12 md:mb-0 bg-custom-gray m-2 rounded-md p-2" key={index}>
          <div className="mb-6 flex justify-center">
            <img
              src={testimonial.image}
              alt={testimonial.name[0]}
              className="w-32 h-32 rounded-full shadow-lg dark:shadow-white/30 text-white m-2"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold text-custom-tan">{testimonial.name}</h5>
          <p className="mb-4 text-custom-tan">{testimonial.review}</p>
        </div>
      ))}
    </div>
  </div>
    );
  };

  