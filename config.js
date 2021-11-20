
const config = {
  style: "mapbox://styles/mapbox/light-v10",
  accessToken:
    "pk.eyJ1IjoiMTUwMDBycG0iLCJhIjoiY2thMjlmMmI2MDFyZDNncWJqdDRrM3JodSJ9.r7ZzMR34a2YZtNXSOVmZEg",
  center: [41, 57.116],
  zoom: 10,
  title: "Mapshal",
  description:
    "GUANGGAOWEIZAOZHU",
  sideBarInfo: ["Name", "Address", "Intro"],
  popupInfo: ["Name"],
  filters: [
    {
      type: "dropdown",
      title: "地点类型: ",
      columnHeader: "Type",
      listItems: [
        "房屋",
        "学校",
        "景点",
      ],
    },
    {
      type: "checkbox",
      title: "人物: ",
      columnHeader: "PPL", // Case sensitive - must match spreadsheet entry
      listItems: ["华西列夫斯基", "切尔尼亚霍夫斯基","朱可夫","罗科索夫斯基","安东诺夫","什捷缅科","华西列夫斯基父亲","尤里","伊戈尔"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
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
