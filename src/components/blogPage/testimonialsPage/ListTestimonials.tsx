import { testimonialsList } from '@/lib/constants/testimonialList';
import Image from 'next/image';

export const TestimonialsCustomerList = () => {
  const firstTestimonial = testimonialsList.slice(0, 3);
  const secondTestimonial = testimonialsList.slice(3, 6);
  const thirdTestimonial = testimonialsList.slice(6, 9);
  return (
    <div className="bg-[#F8F5F3] pb-12">
      <div className="h-[230px] md:h-[240px] bg-primary"></div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {firstTestimonial.map((testimonial, index) => {
            return (
              <li
                key={index}
                className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <p className="text-lg font-semibold font-montserrat mb-2">
                  {testimonial.text}
                </p>
                <p className="text-sm text-[#455150] font-montserrat mb-4">
                  {testimonial.description}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="mr-4 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-montserrat font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#455150] font-montserrat">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {secondTestimonial.map((testimonial, index) => {
            return (
              <li
                key={index}
                className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <p className="text-lg font-semibold font-montserrat mb-2">
                  {testimonial.text}
                </p>
                <p className="text-sm text-[#455150] font-montserrat mb-4">
                  {testimonial.description}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="mr-4 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-montserrat font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#455150] font-montserrat">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className=" md:flex md:flex-col translate-y-[-131px] md:translate-y-[-141px] space-y-6">
          {thirdTestimonial.map((testimonial, index) => {
            return (
              <li
                key={index}
                className={`bg-white h-fit p-6 rounded-lg shadow ${index >= 3 && index <= 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <p className="text-lg font-semibold font-montserrat mb-2">
                  {testimonial.text}
                </p>
                <p className="text-sm text-[#455150] font-montserrat mb-4">
                  {testimonial.description}
                </p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="mr-4 rounded-full"
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-sm font-montserrat font-semibold">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-[#455150] font-montserrat">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-center -mt-20 px-4 ">
        <button className="bg-[white] text-[#172524] font-montserrat font-semibold py-[10px] px-[60px] rounded-lg border hover:bg-primary hover:text-white w-full md:w-auto">
          View More
        </button>
      </div>
    </div>
  );
};
