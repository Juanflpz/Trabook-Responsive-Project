const [data, setData] = useState([]);

useEffect(() => {
  async function loadData() {
    const data = await fetchData();
    setData(data);
  }

  loadData();
}, []);

return (
  <div>
    {data.map((item) => (
      <p key={item.id}>{item.name}</p>
    ))}
  </div>
);
/*
const data = {
    li1: 'Home',
    li2: 'About',
    li3: 'Destination',
    li4: 'Tour',
    li5: 'Blog',
    a1: 'Login',
    a2: 'Sign up',
    image: 'Logo-icon.png'
};

export default data;
const cards = [
    { id: 1, image: 'blog01.png', title: 'The Amazing Difference a Year <br/>of Travelling.', date: 'July 27, 2023'},
    { id: 2, image: 'blog02.png', title: 'Travel far enough, you meet <br/>yourself.', date: 'August 13, 2023'},
    { id: 3, image: 'blog04.png', title: 'Reflections on 5 Months of <br/>Travel: Time to Hang.', date: 'February 29, 2024'},
    { id: 4, image: 'blog03.png', title: 'How to Save Money While <br/>Visiting Africa.', date: 'June 5, 2022'},
    { id: 5, image: 'blog04.png', title: 'Reflections on 5 Months of <br/>Travel: Time to Hang.', date: 'February 29, 2024'},
    { id: 6, image: 'blog04.png', title: 'Reflections on 5 Months of <br/>Travel: Time to Hang.', date: 'February 29, 2024'},
    { id: 7, image: 'blog04.png', title: 'Reflections on 5 Months of <br/>Travel: Time to Hang.', date: 'February 29, 2024'},
    { id: 8, image: 'blog04.png', title: 'Reflections on 5 Months of <br/>Travel: Time to Hang.', date: 'February 29, 2024'},
    { id: 9, image: 'blog03.png', title: 'How to Save Money While <br/>Visiting Africa.', date: 'June 5, 2022'},
    { id: 10, image: 'blog03.png', title: 'How to Save Money While <br/>Visiting Africa.', date: 'June 5, 2022'},
    { id: 11, image: 'blog03.png', title: 'How to Save Money While <br/>Visiting Africa.', date: 'June 5, 2022'},
    { id: 12, image: 'blog03.png', title: 'How to Save Money While <br/>Visiting Africa.', date: 'June 5, 2022'},
    { id: 13, image: 'blog02.png', title: 'Travel far enough, you meet <br/>yourself.', date: 'August 13, 2023'},
    { id: 14, image: 'blog02.png', title: 'Travel far enough, you meet <br/>yourself.', date: 'August 13, 2023'},
    { id: 15, image: 'blog02.png', title: 'Travel far enough, you meet <br/>yourself.', date: 'August 13, 2023'},
    { id: 16, image: 'blog02.png', title: 'Travel far enough, you meet <br/>yourself.', date: 'August 13, 2023'},
    { id: 17, image: 'blog01.png', title: 'The Amazing Difference a Year <br/>of Travelling.', date: 'July 27, 2023'},
    { id: 18, image: 'blog01.png', title: 'The Amazing Difference a Year <br/>of Travelling.', date: 'July 27, 2023'},
    { id: 19, image: 'blog01.png', title: 'The Amazing Difference a Year <br/>of Travelling.', date: 'July 27, 2023'},
    { id: 20, image: 'blog01.png', title: 'The Amazing Difference a Year <br/>of Travelling.', date: 'July 27, 2023'},
];

*/
export default cards;
