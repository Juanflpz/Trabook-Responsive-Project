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
*/