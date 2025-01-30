import { motion } from "framer-motion";

const courses = [
  {
    title: "Competitive Exams",
    classRange: "Class 10 - 12",
    tags: ["JEE", "NEET", "JEE/NEET Foundation", "EAMCET", "Olympiad"],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-blue-100",
  },
  {
    title: "College Courses",
    classRange: "Class 12 - Above",
    tags: ["BBA", "BCA", "B-COM", "MBA", "MCA", "M-COM","PHD"],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-yellow-100",
  },
  
  {
    title: "School Tuition",
    classRange: "Class 5 - 10",
    tags: ["HSC Board", "English Medium", "Semi-Marathi Medium"],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-purple-100",
  },
  {
    title: "Courses for Kids",
    classRange: "Class 1 - 5",
    tags: ["Spoken English Program", "Learn English", "Learn Math", "Learn Code"],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-yellow-100",
  },
  {
    title: "School Tuition",
    classRange: "Class 5 - 10",
    tags: ["HSC Board", "English Medium", "Semi-Marathi Medium"],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-purple-100",
  },
  {
    title: "IT Courses",
    classRange: "Class 5 - Above",
    tags: ["Web Designing", "Java Developement", "Python Development" ],
    image: "https://via.placeholder.com/150", // Replace with actual image
    bgColor: "bg-blue-100",
  },
 
];

const HCourses =() => {



  return (
    <>
    <section className="py-10 px-6 md:p-14">
      <h2 className="text-3xl font-bold mb-6">Explore courses <span className="text-gray-500">(Class 5 - College)</span></h2>
      <div className="grid md:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl shadow-lg ${course.bgColor}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="text-blue-600 font-semibold">{course.classRange}</p>
            <h3 className="text-xl font-bold mt-2">{course.title}</h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {course.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-white text-red-500 rounded-lg border border-gray-300 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <motion.img 
              src={course.image} 
              alt={course.title} 
              className="mt-4 w-full rounded-lg"
              whileHover={{ scale: 1.05 }}
            />
            <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-orange-600">
              Explore Courses
            </button>
          </motion.div>
        ))}
      </div>
    </section>
    <div className="overflow-hidden">
      <marquee behavior="scroll" direction="left">
        <img src="/Logo/L1.png" alt="Image 1" className="h-[50px] mx-4 inline-block" />
        <img src="/Logo/L2.png" alt="Image 2" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L3.png" alt="Image 3" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L4.png" alt="Image 4" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L5.png" alt="Image 5" className="h-[35px] mx-4 inline-block" />
        <img src="/Logo/L6.png" alt="Image 6" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L7.png" alt="Image 7" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L8.png" alt="Image 3" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L9.png" alt="Image 4" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L10.png" alt="Image 5" className="h-[50px] mx-4 inline-block" />
        <img src="/Logo/L11.png" alt="Image 1" className="h-[30px] mx-4 inline-block" />
        <img src="/Logo/L12.png" alt="Image 2" className="h-[60px] mx-4 inline-block" />
        <img src="/Logo/L13.png" alt="Image 3" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L14.png" alt="Image 4" className="h-[30px] mx-4 inline-block" />
        <img src="/Logo/L15.png" alt="Image 5" className="h-[30px] mx-4 inline-block" />
        <img src="/Logo/L16.png" alt="Image 1" className="h-[35px] mx-4 inline-block" />
        <img src="/Logo/L17.png" alt="Image 2" className="h-[30px] mx-4 inline-block" />
        <img src="/Logo/L18.png" alt="Image 3" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L19.png" alt="Image 4" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L20.png" alt="Image 5" className="h-[50px] mx-4 inline-block" />
        <img src="/Logo/L21.png" alt="Image 1" className="h-[40px] mx-4 inline-block" />
        <img src="/Logo/L22.png" alt="Image 2" className="h-[35px] mx-4 inline-block" />
        
      </marquee>
    </div>
    </>
  );
}
export default HCourses;