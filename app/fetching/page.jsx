'use client'
import { useEffect, useMemo, useState } from "react";

const fetchAPI = async () => {
  const fetchData = await fetch('https://6593d8a71493b01160694425.mockapi.io/user');
  const response = await fetchData.json();
  return response;
};

const Page = () => {
  const [data, setData] = useState([]);
  const [amountPagination, setAmountPagination] = useState(0);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchingData = await fetchAPI();
      setData(fetchingData);
      setAmountPagination(Math.ceil(fetchingData.length / 8));
    };
    fetchData();
  }, []);

  const displayingdata = useMemo(() => {
    return data.slice(pagination, pagination + 8);
  }, [pagination, data]);

  const handleClick = (i) => {
    setPagination(i * 8);
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center pt-24 pb-12">
      <div className="flex justify-center gap-5 flex-wrap h-full">
        {displayingdata &&
          displayingdata.map((datum) => (
            <div key={datum.id} className="flex items-center justify-center w-64 py-4 rounded-md border">
              <h1 className="text-lg text-slate-50">{datum.name}</h1>
              <img src={datum.avatar} alt="" />
            </div>
          ))}
      </div>
      <div className="w-full justify-center items-center mt-7 flex gap-4">
        {amountPagination &&
          Array.from({ length: amountPagination }, (_, i) => (
            <button key={i} className={`px-3 py-1 rounded-full  text-slate-100 ${(pagination/8)===i?"bg-red-800":"bg-gray-700"} `} onClick={() => handleClick(i)}>
              {i + 1}
            </button>
          ))}
      </div>
    </main>
  );
};

export default Page;
