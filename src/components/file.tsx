'use client'
import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
interface Department {
  name: string;
  subDepartments: string[];
}
interface DepartmentListProps {
  departments: Department[];
}
const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((i) => i !== index);
      }
      return [...prevOpenIndexes, index];
    });
  };

 const renderDepartment = (department: Department, index: number) => {
    const isOpen = openIndexes.includes(index);

    return (
      <div key={department.name}>
        <ListItem  onClick={() => handleClick(index)}>
          <ListItemText primary={department.name} />
          {isOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {department.subDepartments.map((subDepartment, subIndex) => (
              <ListItem key={subDepartment.name} >
                <ListItemText primary={subDepartment.name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      </div>
    );
  };

  return (
    <List component="nav">
      {departments.map((department, index) => renderDepartment(department, index))}
    </List>
  );
};
export default DepartmentList;