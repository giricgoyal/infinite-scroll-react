import { useCallback, useState } from "react";
import { getData } from "./helper";
import InfiniteScroll from "./InfiniteScroll";
import "./styles.css";

export default function App() {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 50;
  const [data, setData] = useState(getData(page, PAGE_SIZE));

  const fetchData = useCallback(() => {
    const newData = getData(page + 1, PAGE_SIZE);
    console.log(newData);
    if (newData.length) {
      setPage(page + 1);
      setData([...data, ...newData]);
    }
  }, [data, page]);

  return (
    <div className="App">
      <InfiniteScroll fetchData={fetchData}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>IP Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datum, index) => (
              <tr key={index}>
                <td>{datum.id}</td>
                <td>{datum.first_name}</td>
                <td>{datum.last_name}</td>
                <td>{datum.email}</td>
                <td>{datum.gender}</td>
                <td>{datum.ip_address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
}
