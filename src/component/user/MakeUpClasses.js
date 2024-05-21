// import { Card, Space } from 'antd'
// import React from 'react'

// const MakeUpClasses = () => {
//   return (
//     <div>
//       <Space direction="vertical" size={16}>
//     <Card
//       title="Default size card"
//       extra={<a href="#">More</a>}
//       style={{
//         width: 300,
//       }}
//     >
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//     <Card
//       size="small"
//       title="Small size card"
//       extra={<a href="#">More</a>}
//       style={{
//         width: 300,
//       }}
//     >
//       <p>Card content</p>
//       <p>Card content</p>
//       <p>Card content</p>
//     </Card>
//   </Space>
//     </div>
//   )
// }

// export default MakeUpClasses


import React from 'react';

const MakeUpClasses = () => {
  // Hardcoded makeup classes timetable data
  const classesTimetable = [
    { day: 'Monday', time: '10:00 AM - 12:00 PM', className: 'Basic Makeup Techniques' },
    { day: 'Wednesday', time: '2:00 PM - 4:00 PM', className: 'Contouring Masterclass' },
    { day: 'Friday', time: '3:00 PM - 5:00 PM', className: 'Smokey Eye Tutorial' },
  ];

  return (
    <div>
<h2 style={{
  fontSize: '24px',
  color: '#333',
  marginBottom: '20px',
  
}}>Makeup Classes Timetable</h2>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class Name</th>
          </tr>
        </thead>
        <tbody>
          {classesTimetable.map((classItem, index) => (
            <tr key={index}>
              <td>{classItem.day}</td>
              <td>{classItem.time}</td>
              <td>{classItem.className}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakeUpClasses;
