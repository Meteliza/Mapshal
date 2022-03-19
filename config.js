const config = {
  style: "mapbox://styles/15000rpm/ckwamo3cw1tbr14piraxr8met",
  //style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiMTUwMDBycG0iLCJhIjoiY2thMjlmMmI2MDFyZDNncWJqdDRrM3JodSJ9.r7ZzMR34a2YZtNXSOVmZEg",
  center: [41, 57.116],
  zoom: 10,
  title: "Mapshal-beta",
  description:
    "<p>测试版瞎搞搞上线，</p><p>内容、功能完善及bug反馈等请发至<a style='text-decoration: underline' href='https://i-saw-you.lofter.com/'>ooomuq@gmail.com</a>。</p>",
  sideBarInfo: ["Name", "Fname", "Address",'Date_1','Date_2',"Intro"],
  popupInfo: ["Name"],
  filters: [
    {
      type: "dropdown",
      title: "地点类型: ",
      columnHeader: "Type",
      listItems: [
        "住所",
        "学校",
        "教堂",
        "疗养院",
        "博物馆",
      ],
    },
    {
      type: "checkbox",
      title: "人物: ",
      columnHeader: "PPL", // Case sensitive - must match spreadsheet entry
      listItems: ["华西列夫斯基", "切尔尼亚霍夫斯基","朱可夫","罗科索夫斯基","安东诺夫","什捷缅科","尤里","伊戈尔"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    //{
      //type: "dropdown",
      //title: "Clients: ",
      //columnHeader: "Clients",
      //listItems: [
        //"Adults",
        //"Disabled",
        //"Homeless",
      //],
    //},
  ],
};
