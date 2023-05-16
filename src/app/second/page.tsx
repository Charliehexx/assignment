'use client'
import { useEffect, useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import DepartmentList from '@/components/file';

const ITEMS_PER_PAGE = 10;
interface Department {
  name: string;
  subDepartments: string[];
}
const departments=[
	{
  	"department": "customer_service",
  	"subDepartment": [
    	"support",
    	"customer_success"
  	]
	},
	{
  	"department": "design",
  	"subDepartment": [
    	"graphic_design",
    	"product_design",
    	"web_design"
  	]
	}
  ]

const Second: React.FC = () => {

  const [data, setData] = useState([]);

  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await response.json();
        setData(json);
        console.log(json)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
  <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Body</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
 {data.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE).map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.body}</TableCell>
            </TableRow>
          ))}
      </TableBody>
      
    </Table>
{/* <DepartmentList departments={departments}/> */}
{departments.map((a)=>{<div>
  a.department
</div>

})}
</>
  );
};

export default Second;
