export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const productData = [
  {
    id: 1,
    imgUrl: "/src/assets/welcome.jpg",
    name: "Mcepha & ASSOCIATES Accountants",
    price: "ksh 20, 000",
    description: "Welcome statement and some description....",
  },
  {
    id: 2,
    imgUrl: "/src/assets/audittt.jpg",
    name: "Accountants",
    price: "ksh 30, 000",
    description: "About Accountants and some description....",
  },
  {
    id: 3,
    imgUrl: "/src/assets/auditt222.jpg",
    name: "Audits",
    price: "ksh 40, 000",
    description: "Audits and some description....",
  },
  {
    id: 4,
    imgUrl: "/src/assets/bizadvice1.jpg",
    name: "Business Advisory",
    price: "ksh 50, 000",
    description: "Some Business advisory statement and some description....",
  },
  {
    id: 5,
    imgUrl: "/src/assets/tax1.jpg",
    name: "Tax & Filing returns",
    price: "ksh 10, 000",
    description: "Anual Tax Auditing and some description....",
  },
];
