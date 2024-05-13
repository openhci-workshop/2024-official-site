type Teams = string[];

export const teams: Teams = [
    "總召",
    "行銷",
    "人資",
    "財務",
    "視覺",
    "網管",
    "公關",
    "演講",
    "攝影",
    "技術教學",
    "設計教學",
    "設計 TA",
    "技術 TA",
]


type Students = {
    team: string; 
    name: string; 
    school: string; 
    department: string;
    image: string;
};

export const students: Students[] = [
    {
        "team": "總召",        
        "name": "張恩愷",
        "school": "陽明交通大學",
        "department": "傳播與科技碩士班",
        "image": "/images/stu_pics/張恩愷.jpg"
    },
    {
        "team": "總召",
        "name": "陳玟諭",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/陳玟諭.jpg"
    },
    {
        "team": "總召",
        "name": "賴詠晴",
        "school": "臺灣大學",
        "department": "資訊工程學系",
        "image": "/images/stu_pics/賴詠晴.jpg"
    },
    {
        "team": "行銷",
        "name": "楊芷嫺",
        "school": "陽明交通大學",
        "department": "百川學士學位學程",
        "image": "/images/stu_pics/楊芷嫺.jpg"
    },
    {
        "team": "行銷",
        "name": "王雅靜",
        "school": "陽明交通大學",
        "department": "傳播與科技碩士班",
        "image": "/images/stu_pics/王雅靜.jpg"
    },
    {
        "team": "行銷",
        "name": "盧亭臻",
        "school": "臺灣大學",
        "department": "圖書資訊學系",
        "image": "/images/stu_pics/盧亭臻.jpg"
    },
    {
        "team": "人資",
        "name": "揭宜蓁",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/揭宜蓁.jpg"
    },
    {
        "team": "人資",
        "name": "廖語岑",
        "school": "政治大學",
        "department": "心理學系",
        "image": "/images/stu_pics/廖語岑.jpg"
    },
    {
        "team": "人資",
        "name": "王立蓁",
        "school": "政治大學",
        "department": "歷史學系/數位內容學士學位學程",
        "image": "/images/stu_pics/王立蓁.jpg"
    },
    {
        "team": "財務",
        "name": "曾苡涵",
        "school": "大同大學",
        "department": "事業經營系",
        "image": "/images/stu_pics/曾苡涵.jpg"
    },
    {
        "team": "財務",
        "name": "曾敬哲",
        "school": "政治大學",
        "department": "金融所",
        "image": "/images/stu_pics/曾敬哲.jpg"
    },
    {
        "team": "視覺",
        "name": "葉聿昕",
        "school": "清華大學",
        "department": "經濟學系",
        "image": "/images/stu_pics/葉聿昕.jpg"
    },
    {
        "team": "視覺",
        "name": "孫若晏",
        "school": "中山大學",
        "department": "資訊管理學系",
        "image": "/images/stu_pics/孫若晏.jpg"
    },
    {
        "team": "視覺",
        "name": "王芷洺",
        "school": "政治大學",
        "department": "傳播碩士學位學程",
        "image": "/images/stu_pics/王芷洺.jpg"
    },
    {
        "team": "視覺",
        "name": "陳媛婷",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/陳媛婷.jpg"
    },
    {
        "team": "視覺",
        "name": "張致瑜",
        "school": "台北科技大學",
        "department": "互動設計所",
        "image": "/images/stu_pics/張致瑜.jpg"
    },
    {
        "team": "網管",
        "name": "蔡明達",
        "school": "臺灣科技大學",
        "department": "智慧製造科技研究所",
        "image": "/images/stu_pics/蔡明達.jpg"
    },
    {
        "team": "網管",
        "name": "童嬿瑜",
        "school": "臺灣大學",
        "department": "資訊工程學系",
        "image": "/images/stu_pics/童嬿瑜.jpg"
    },
    {
        "team": "網管",
        "name": "黃采婕",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/黃采婕.jpg"
    },
    {
        "team": "公關",
        "name": "張以柔",
        "school": "臺灣大學",
        "department": "圖書資訊學系",
        "image": "/images/stu_pics/張以柔.jpg"
    },
    {
        "team": "公關",
        "name": "吳安倢",
        "school": "中山大學",
        "department": "資訊管理所",
        "image": "/images/stu_pics/吳安倢.jpg"
    },
    {
        "team": "公關",
        "name": "彭鈺婷",
        "school": "清華大學",
        "department": "藝術學院學士班",
        "image": "/images/stu_pics/彭鈺婷.jpg"
    },
    {
        "team": "公關",
        "name": "黃榆禎",
        "school": "陽明交通大學",
        "department": "傳播與科技學系",
        "image": "/images/stu_pics/黃榆禎.jpg"
    },
    {
        "team": "演講",
        "name": "陳育陞",
        "school": "政治大學",
        "department": "數位內容學士學位學程",
        "image": "/images/stu_pics/陳育陞.jpg"
    },
    {
        "team": "演講",
        "name": "王士涵",
        "school": "臺灣大學",
        "department": "外國語文學系/心理學系",
        "image": "/images/stu_pics/王士涵.jpg"
    },
    {
        "team": "演講",
        "name": "陳品頤",
        "school": "臺灣大學",
        "department": "工商管理學系 科技管理組",
        "image": "/images/stu_pics/陳品頤.jpg"
    },
    {
        "team": "攝影",
        "name": "李聿屏",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/李聿屏.jpg"
    },
    {
        "team": "技術教學",
        "name": "方群鈞",
        "school": "臺灣大學",
        "department": "資訊工程學系",
        "image": "/images/stu_pics/方群鈞.jpg"
    },
    {
        "team": "技術教學",
        "name": "林冠銘",
        "school": "成功大學",
        "department": "電機系",
        "image": "/images/stu_pics/林冠銘.jpg"
    },
    {
        "team": "技術教學",
        "name": "陳士茵",
        "school": "中正大學",
        "department": "資訊工程所",
        "image": "/images/stu_pics/陳士茵.jpg"
    },
    {
        "team": "設計教學",
        "name": "黃宣銘",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/黃宣銘.jpg"
    },
    {
        "team": "設計教學",
        "name": "陳玉書",
        "school": "臺灣科技大學",
        "department": "設計所",
        "image": "/images/stu_pics/陳玉書.jpg"
    },
    {
        "team": "設計教學",
        "name": "楊詠晴",
        "school": "臺灣大學",
        "department": "心理學系",
        "image": "/images/stu_pics/楊詠晴.jpg"
    },
    {
        "team": "設計 TA",
        "name": "黃鈺善",
        "school": "臺灣科技大學",
        "department": "設計所",
        "image": "/images/stu_pics/黃鈺善.jpg"
    },
    {
        "team": "設計 TA",
        "name": "紀玟伶",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/紀玟伶.jpg"
    },
    {
        "team": "設計 TA",
        "name": "廖奕慈",
        "school": "台北科技大學",
        "department": "互動設計所",
        "image": "/images/stu_pics/廖奕慈.jpg"
    },
    {
        "team": "設計 TA",
        "name": "李佳蓁",
        "school": "臺灣大學",
        "department": "圖書資訊學系雙主修創新領域學士學位學程",
        "image": "/images/stu_pics/李佳蓁.jpg"
    },
    {
        "team": "設計 TA",
        "name": "賴竹原",
        "school": "臺灣大學",
        "department": "創新領域學士學位",
        "image": "/images/stu_pics/賴竹原.jpg"
    },
    {
        "team": "設計 TA",
        "name": "許青純",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/許青純.jpg"
    },
    {
        "team": "設計 TA",
        "name": "楊祐維",
        "school": "台灣大學",
        "department": "創新領域學士學位學程",
        "image": "/images/stu_pics/楊祐維.jpg"
    },
    {
        "team": "技術 TA",
        "name": "王新翌",
        "school": "臺灣科技大學",
        "department": "資訊工程學系/互動設計學程",
        "image": "/images/stu_pics/王新翌.jpg"
    },
    {
        "team": "技術 TA",
        "name": "胡芸毓",
        "school": "政治大學",
        "department": "數位內容碩士學位學程",
        "image": "/images/stu_pics/胡芸毓.jpg"
    },
    {
        "team": "技術 TA",
        "name": "陳以潼",
        "school": "臺灣大學",
        "department": "資訊管理學系",
        "image": "/images/stu_pics/陳以潼.jpg"
    },
    {
        "team": "技術 TA",
        "name": "蔡宜珊",
        "school": "陽明交通大學",
        "department": "電機系",
        "image": "/images/stu_pics/蔡宜珊.jpg"
    },
    {
        "team": "技術 TA",
        "name": "林珀鋒",
        "school": "臺灣科技大學",
        "department": "資訊工程碩士班",
        "image": "/images/stu_pics/林珀鋒.jpg"
    },
    {
        "team": "技術 TA",
        "name": "王聖翔",
        "school": "臺灣科技大學",
        "department": "資訊管理碩士班",
        "image": "/images/stu_pics/王聖翔.jpg"
    },
    {
        "team": "技術 TA",
        "name": "吳易陞",
        "school": "雲林科技大學",
        "department": "資訊管理學系",
        "image": "/images/stu_pics/吳易陞.jpg"
    }
]

// export const students = student.map(stu => {
//     return {
//         ...stu,
//         image: `/images/stu_pics/${stu.name}.jpg`
//     }

// })