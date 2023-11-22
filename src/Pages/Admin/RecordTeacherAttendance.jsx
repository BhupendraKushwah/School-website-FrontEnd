import React from 'react'
import RecordAttendance from '../../Component/Admin/RecordAttendance'

const RecordTeacherAttendance = () => {

    const teachersData = [
        {
          "_id": "65411303ce887197db05bb7c",
          "Username": "pawan0223",
          "Name": "pawan kumar",
          "Email": "pawan_kumar750@gmail.com",
          "Role": "teacher",
          "Classes": [
            {
              "subject": "Science",
              "class": "Class 10",
              "_id": "65411303ce887197db05bb7d"
            },
            {
              "subject": "Biology",
              "class": "Class 11",
              "_id": "65411303ce887197db05bb7e"
            },
            {
              "subject": "Biology",
              "class": "Class 12",
              "_id": "65411303ce887197db05bb7f"
            }
          ],
          "Gender": "male",
          "Contact": 919766426533,
          "Address": "2-B chappar wali gali ram mandir ke aage morar",
          "__v": 0,
          "resetToken": "2e110cfd8963b56d158dd873eaf2c825",
          "resetTokenExpiration": "2023-11-01T20:22:56.712Z",
          "ClassTeacher": "Class 10"
        },
        {
          "_id": "6542a60271fad17cb6eab684",
          "Username": "Ramesh_Kushwah435",
          "Name": "Ramesh Singh Joshi",
          "Email": "Ramesh_Kushwah43567@gmail.com",
          "Role": "teacher",
          "Classes": [
            {
              "subject": "Science",
              "class": "Class 6",
              "_id": "65455035162b1f2a33c85fdc"
            },
            {
              "subject": "Biology",
              "class": "Class 12",
              "_id": "65455035162b1f2a33c85fdd"
            },
            {
              "subject": "Sanskrit",
              "class": "Class 9",
              "_id": "65455035162b1f2a33c85fde"
            }
          ],
          "Gender": "male",
          "Contact": 919653266580,
          "Address": "90-k Opposit Rolex Office AG Road Shimla",
          "__v": 0,
          "ClassTeacher": "Class 8"
        }
      ];

  return (
   <RecordAttendance userData={teachersData} Role={"teacher"}/>
  )
}

export default RecordTeacherAttendance
