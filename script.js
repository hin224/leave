// 教师登录简单验证
const PASSWORD = "123456";  // 预设密码（请根据需要修改）
const loginSection = document.getElementById('loginSection');
const formSection = document.getElementById('formSection');
const loginBtn = document.getElementById('loginBtn');
const loginPwd = document.getElementById('loginPwd');
loginBtn.addEventListener('click', () => {
  if (loginPwd.value === PASSWORD) {
    formSection.style.display = 'block';
    loginSection.style.display = 'none';
  } else {
    alert('密码错误，请重新输入！');
  }
});

// 数据：学生名单（中文名、英文名、班级）
const studentsList = [
  {"cn":"李顺诚","en":"LEE SUN SHENG","class":"J1Z"},
  {"cn":"杨悦彤","en":"YONG YUE TONG","class":"J1Z"},
  {"cn":"魏健豪","en":"NGAI JIAN HAO","class":"J1Z"},
  {"cn":"黄斯祺","en":"WONG SEE KEI","class":"J1Z"},
  {"cn":"潘卉恩","en":"PHAN HUI YEN","class":"J1Z"},
  {"cn":"刘均廷","en":"LAU KEN TING","class":"J1Z"},
  {"cn":"陈宣廷","en":"TAN SWAN TING","class":"J1Z"},
  {"cn":"许子淇","en":"KHOR ZI QI","class":"J1Z"},
  {"cn":"苏凯晴","en":"SOO KAI QIN","class":"J1Z"},
  {"cn":"刘璟瑞","en":"LAU KING SUI","class":"J1Z"},
  {"cn":"姚俊轩","en":"YAU CHUN HIN","class":"J1Z"},
  {"cn":"黄俊杰","en":"NG KEAN JIT","class":"J1Z"},
  {"cn":"冯凯欣","en":"FUNG KAI XIN","class":"J1Z"},
  {"cn":"黄莞宁","en":"NGO GUAN NING","class":"J1Z"},
  {"cn":"陈柔妍","en":"TAN JOW YEN","class":"J1Z"},
  {"cn":"梁祉晴","en":"LEONG ZHI QIN","class":"J1Z"},
  {"cn":"杨楚浠","en":"YEONG CHOON SEE","class":"J1Z"},
  {"cn":"宋宇恒","en":"SOONG YU HENG","class":"J1X"},
  {"cn":"刘安妮","en":"LAU ANNE","class":"J1X"},
  {"cn":"钟乐怡","en":"CHUNG RAK YEE","class":"J1X"},
  {"cn":"林辰昊","en":"LIM CHERN HOW","class":"J1X"},
  {"cn":"胡诗琪","en":"OH SZE KEE","class":"J1X"},
  {"cn":"黄洛妍","en":"NG LOK YIN","class":"J1X"},
  {"cn":"甘柏维","en":"KIM BO WEI","class":"J1X"},
  {"cn":"梁颂彦","en":"LEONG SOONG YAN","class":"J1X"},
  {"cn":"曾子涵","en":"CHAN ZHE HAN","class":"J1X"},
  {"cn":"魏妍君","en":"NGAI YEN KOON","class":"J1X"},
  {"cn":"张凯仪","en":"CHEONG KAI YEE","class":"J1X"},
  {"cn":"郑瑾瑜","en":"TEH KYEEN YU","class":"J1X"},
  {"cn":"杨晴","en":"YANG QING","class":"J1X"},
  {"cn":"郑雅琳","en":"TAY YEA LIN","class":"J1X"},
  {"cn":"林伽恩","en":"LIM JIA EN","class":"J1X"},
  {"cn":"钟邦耀","en":"CHUNG BONG YAO","class":"J1X"},
  {"cn":"许颖琪","en":"KHOR YING QI","class":"J1X"},
  {"cn":"苏凯茵","en":"SOO KAI YIN","class":"J1X"},
  {"cn":"陈沛均","en":"TAN PEI KUN","class":"J1X"},
  {"cn":"张涵琪","en":"CHEONG HAN QI","class":"J1R"},
  {"cn":"李芷宁","en":"LEE ZHI NING","class":"J1R"},
  {"cn":"曾斯媛","en":"CHAN SZ YUEN","class":"J1R"},
  {"cn":"魏欣恬","en":"NGAI XIN TIAN","class":"J1R"},
  {"cn":"杨昀熙","en":"YONG YUN XI","class":"J1R"},
  {"cn":"陈靖雯","en":"TAN CHING WEN","class":"J1R"},
  {"cn":"许嘉怡","en":"KHOR KAR YEE","class":"J1R"},
  {"cn":"苏芯瑜","en":"SOO SIM YU","class":"J1R"},
  {"cn":"张雅慧","en":"CHEONG NGA WAI","class":"J1R"},
  {"cn":"林忻妍","en":"LIM XIN YEN","class":"J1R"},
  {"cn":"蔡晏安","en":"CHOY YAN AN","class":"J1R"},
  {"cn":"廖苡安","en":"LIEW YI ANNE","class":"J1R"},
  {"cn":"侯芊仪","en":"HOO QIAN YI","class":"J1R"},
  {"cn":"黄匀谕","en":"NG YUN YU","class":"J1R"},
  {"cn":"曾婕妤","en":"CHEN KIT YEE","class":"J1R"},
  {"cn":"梁妮","en":"LEONG NEE","class":"J1R"},
  {"cn":"黄沁仰","en":"NGO CHIN YEONG","class":"J1R"},
  {"cn":"张凯仪","en":"CHONG KAI YEE","class":"J1R"},
  {"cn":"周可馨","en":"CHOW KAR XIN","class":"J1R"},
  {"cn":"郑琬澧","en":"TEH YUEN LEE","class":"J1R"},
  {"cn":"林雨婷","en":"LIM YU TING","class":"J1R"},
  {"cn":"颜玮琪","en":"YEN WEI QI","class":"J1R"},
  {"cn":"曾凯欣","en":"CHAN KAI XIN","class":"J1R"},
  {"cn":"黄子芯","en":"NG ZHE XIN","class":"J1R"},
  {"cn":"黄开怡","en":"NGO KAI YEE","class":"J1R"},
  {"cn":"叶栴恩","en":"YAP ZHAN EN","class":"J1R"},
  {"cn":"黄洁雯","en":"NG JIE WERN","class":"J1R"},
  {"cn":"吴亦芯","en":"NGO YIK SUM","class":"J1R"},
  {"cn":"曾芊毓","en":"CHAN CHIAN YUK","class":"J1R"},
  {"cn":"韩亿蓁","en":"HAN E ZHEN","class":"J1R"}
];
// 教师名单（中文名、英文名）
const teachersList = [
  {"cn":"叶潍光","en":"Yap Voy Kong"},
  {"cn":"朱英华","en":"Choo Ying Wah"},
  {"cn":"刘婉冰","en":"Low Woan Bing"},
  {"cn":"黄诗莲","en":"Ooi See Lian"},
  {"cn":"张惠雯","en":"Chong Huey Wen"},
  {"cn":"李敏思","en":"Lee Miin Sy"},
  {"cn":"陈俊宇","en":"Chan Juan Yie"},
  {"cn":"黄慧怡","en":"Ooi Hui Yee"},
  {"cn":"蔡兴俊","en":"Chua Heng Joon"},
  {"cn":"郭珠玉","en":"Kok Chu Yu"},
  {"cn":"何翠玲","en":"Ho Chui Ling"},
  {"cn":"郑宝婷","en":"Teeh Poh Ting"},
  {"cn":"吴慧珊","en":"Goh Hui Shan"},
  {"cn":"王萌","en":"Wang Meng"},
  {"cn":"欧智权","en":"Au Zhi Chuan"},
  {"cn":"刘美君","en":"Lau Mei Koon"},
  {"cn":"禤佩娟","en":"Fan Pui Kuan"},
  {"cn":"雷泳健","en":"Lui Wing Kin"},
  {"cn":"杨祝华","en":"Yeoh Chuk Wah"},
  {"cn":"黎佩茵","en":"Lee Pui Yin"},
  {"cn":"杨丽芳","en":"Yeong Lai Fong"},
  {"cn":"陈建豪","en":"Tan Kian Ho"},
  {"cn":"覃霆辉","en":"Tam Thiam Fui"},
  {"cn":"叶富年","en":"Yap Foo Nian"},
  {"cn":"郑晓莉","en":"Teeh Siew Lee"},
  {"cn":"谢志强","en":"Chia Chee Keong"},
  {"cn":"罗可盈","en":"Loh Ker Yieng"},
  {"cn":"梁睿哲","en":"Reine Leong Rui Zhe"},
  {"cn":"房坤英","en":"Fong Kuan Ying"},
  {"cn":"蔡晓梅","en":"Chua Siew Mei"},
  {"cn":"李志伟","en":"Lee Chee Wai"},
  {"cn":"林国豪","en":"Lim Kok How"},
  {"cn":"曾宪春","en":"Chan Hin Chun"},
  {"cn":"陈嘉丽","en":"Tan Kar Lee"},
  {"cn":"黄志华","en":"Ng Chih Hua"},
  {"cn":"林美娟","en":"Lim Mei Kuan"},
  {"cn":"张春美","en":"Teoh Chun Mei"},
  {"cn":"刘诗雅","en":"Lau Sie Ah"},
  {"cn":"周慧婷","en":"Chew Hui Ting"},
  {"cn":"郑宇晴","en":"Teeh Yue Ching"},
  {"cn":"郑智敏","en":"Teeh Chee Min"},
  {"cn":"陈玮琪","en":"Tan Wei Qi"},
  {"cn":"庄澍沅","en":"Chng Soo Yuan"},
  {"cn":"林奕贤","en":"Lim Yik Sien"},
  {"cn":"林晓薇","en":"Lim Siew Wei"},
  {"cn":"颜巧滢","en":"Yan Qiao Ying"},
  {"cn":"林国顺","en":"Lim Kok Soon"}
];
// 班级课表数据（班级 -> 星期 -> {节次: {科目, 任课老师}}）
// 为演示，示例中仅列出 初一忠(J1Z)、初一孝(J1X)、初一仁(J1R) 三个班级的课表，每天课表相同。
const classSchedule = {
  "J1Z": {
    "Monday": {
      "1": {subject: "语文", teacher: "叶潍光"},
      "2": {subject: "英语", teacher: "黄诗莲"},
      "3": {subject: "数学", teacher: "陈俊宇"},
      "4": {subject: "科学", teacher: "郭珠玉"},
      "5": {subject: "历史", teacher: "何翠玲"},
      "6": {subject: "地理", teacher: "郑宝婷"},
      "7": {subject: "美术", teacher: "吴慧珊"},
      "8": {subject: "体育", teacher: "王萌"}
    }
  },
  "J1X": {
    "Monday": {
      "1": {subject: "语文", teacher: "朱英华"},
      "2": {subject: "英语", teacher: "张惠雯"},
      "3": {subject: "数学", teacher: "黄慧怡"},
      "4": {subject: "科学", teacher: "蔡兴俊"},
      "5": {subject: "历史", teacher: "欧智权"},
      "6": {subject: "地理", teacher: "刘美君"},
      "7": {subject: "美术", teacher: "禤佩娟"},
      "8": {subject: "体育", teacher: "雷泳健"}
    }
  },
  "J1R": {
    "Monday": {
      "1": {subject: "语文", teacher: "刘婉冰"},
      "2": {subject: "英语", teacher: "李敏思"},
      "3": {subject: "数学", teacher: "杨祝华"},
      "4": {subject: "科学", teacher: "黎佩茵"},
      "5": {subject: "历史", teacher: "杨丽芳"},
      "6": {subject: "地理", teacher: "陈建豪"},
      "7": {subject: "美术", teacher: "覃霆辉"},
      "8": {subject: "体育", teacher: "叶富年"}
    }
  }
};
// 将上述 Monday 课表复制到周二~周五（假定每周课表相同）
const weekdaysArr = ["Tuesday","Wednesday","Thursday","Friday"];
for (let cls in classSchedule) {
  for (let day of weekdaysArr) {
    // 深拷贝 Monday 的结构
    classSchedule[cls][day] = JSON.parse(JSON.stringify(classSchedule[cls]["Monday"]));
  }
}

// 获取表单元素
const studentNameInput = document.getElementById('studentName');
const studentClassInput = document.getElementById('studentClass');
const studentEnInput = document.getElementById('studentEnName');
const dateInput = document.getElementById('leaveDate');
const periodInput = document.getElementById('leavePeriod');
const activityInput = document.getElementById('activityName');
const typeSelect = document.getElementById('activityType');
const placeInput = document.getElementById('activityPlace');
const teacherSelect = document.getElementById('leaderTeacher');
const conflictDiv = document.getElementById('conflictInfo');
const genTextBtnEl = document.getElementById('genTextBtn');
const genPdfBtnEl = document.getElementById('genPdfBtn');
const outputSectionEl = document.getElementById('outputSection');
const cnTextArea = document.getElementById('cnTextOutput');
const enTextArea = document.getElementById('enTextOutput');
const downloadCnLink = document.getElementById('downloadCn');
const downloadEnLink = document.getElementById('downloadEn');
const downloadCnSep = document.getElementById('downloadCnSep');

// 将学生名单填入 datalist 供姓名模糊搜索
const datalist = document.getElementById('studentList');
studentsList.forEach(stu => {
  const opt = document.createElement('option');
  opt.value = stu.cn;
  datalist.appendChild(opt);
});

// 将教师名单填入带队老师下拉选项
teachersList.forEach(teacher => {
  const opt = document.createElement('option');
  opt.value = teacher.cn;
  opt.textContent = teacher.cn;
  teacherSelect.appendChild(opt);
});

// 辅助：班级代号转中文（如 "J1Z" -> "初一忠"）
function classCodeToName(code) {
  // 判断年级类别
  let grade = code.substring(1,2); // 年级数字
  let level = code[0] === 'J' ? '初' : (code[0] === 'S' ? '高' : '');
  let gradeCn = '';
  if (grade === '1') gradeCn = '一';
  else if (grade === '2') gradeCn = '二';
  else if (grade === '3') gradeCn = '三';
  // 班级字母映射
  const classMap = {"Z":"忠","X":"孝","R":"仁","A":"爱","L":"礼","H":"信"}; // 如有其他班级请扩充映射
  let classChar = code.substring(2); // 班级字母部分（可能不止一位）
  let classCn = classMap[classChar] || classChar;
  return level + gradeCn + classCn;
}

// 当前选择的学生对象
let selectedStudent = null;

// 当姓名输入变化时（模糊搜索选择），自动填出班级和英文名
studentNameInput.addEventListener('input', () => {
  const name = studentNameInput.value.trim();
  // 尝试在列表中匹配中文名
  const stu = studentsList.find(s => s.cn === name);
  if (stu) {
    selectedStudent = stu;
    studentClassInput.value = classCodeToName(stu.class);    // 班级中文名称
    studentEnInput.value = stu.en;
  } else {
    selectedStudent = null;
    studentClassInput.value = "";
    studentEnInput.value = "";
  }
  // 更新冲堂信息提示
  updateConflictInfo();
});

// 日期或时间段变化时，更新冲堂信息
dateInput.addEventListener('change', updateConflictInfo);
periodInput.addEventListener('change', updateConflictInfo);

// 更新冲堂课程/老师提示
function updateConflictInfo() {
  conflictDiv.textContent = "";  // 清空之前的信息
  if (!selectedStudent || !dateInput.value || !periodInput.value) {
    return; // 信息不全，不计算冲堂
  }
  const classCode = selectedStudent.class;
  const dateVal = dateInput.value;
  const periodVal = periodInput.value.trim();
  try {
    const dateObj = new Date(dateVal);
    const dayIndex = dateObj.getDay(); // 0=Sunday,1=Monday,...
    if (dayIndex === 0 || dayIndex === 6) {
      // 周末没有课
      conflictDiv.textContent = "选定日期为周末，没有课程冲突。";
      return;
    }
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const dayName = weekdays[dayIndex];
    // 从时间段字符串中提取节次范围
    let periods = [];
    if (periodVal.includes(':')) {
      // 包含':'符号，视为具体时间段，不确定对应课时，不做冲堂分析
      conflictDiv.textContent = "时间段为具体时刻，请确认相应课时。";
      return;
    } else {
      // 提取数字节次，例如 "第3-4节" 或 "3-4节" 或 "3-4"
      const match = periodVal.match(/(\d+)\s*[-—～至]\s*(\d+)/);
      const singleMatch = periodVal.match(/(\d+)/);
      if (match) {
        // 匹配到范围 3-4
        let start = parseInt(match[1], 10);
        let end = parseInt(match[2], 10);
        if (end < start) [start, end] = [end, start]; // 纠正顺序
        for (let p = start; p <= end; p++) {
          periods.push(p);
        }
      } else if (singleMatch) {
        periods.push(parseInt(singleMatch[1], 10));
      }
    }
    if (periods.length === 0) {
      return;
    }
    // 获取该学生班级在指定日的课表，找出冲堂课程和老师
    const scheduleForDay = classSchedule[classCode] ? classSchedule[classCode][dayName] : null;
    if (!scheduleForDay) {
      conflictDiv.textContent = "未找到该班级的课表数据。";
      return;
    }
    let conflictInfoList = [];
    periods.forEach(p => {
      const lesson = scheduleForDay[p];
      if (lesson) {
        conflictInfoList.push(`第${p}节 ${lesson.subject}（${lesson.teacher}）`);
      }
    });
    if (conflictInfoList.length > 0) {
      conflictDiv.textContent = "冲堂课程：" + conflictInfoList.join("，");
    } else {
      conflictDiv.textContent = "所选时间段无对应课程。";
    }
  } catch (err) {
    console.warn("日期解析错误:", err);
  }
}

// 生成请假条文本内容的函数，返回中英文文本
function createLeaveText() {
  if (!selectedStudent) {
    alert("请在学生姓名栏选择学生。");
    return null;
  }
  const studentNameCn = selectedStudent.cn;
  const studentNameEn = selectedStudent.en;
  const classCode = selectedStudent.class;
  const classNameCn = classCodeToName(classCode); // 班级中文（如 初一忠）
  const dateVal = dateInput.value;
  const periodVal = periodInput.value.trim();
  const activityName = activityInput.value.trim();
  const activityType = typeSelect.value;    // 比赛/演出/讲座/其他 (中文)
  const place = placeInput.value.trim();
  const leaderTeacherCn = teacherSelect.value;   // 带队老师中文名
  if (!dateVal || !periodVal || !activityName || !activityType || !place || !leaderTeacherCn) {
    alert("请完整填写所有字段！");
    return null;
  }
  // 将日期格式化为 YYYY年M月D日 和 英文格式
  const dateObj = new Date(dateVal);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const dateCn = `${year}年${month}月${day}日`;
  // 英文日期格式（e.g. September 28, 2025）
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dateEn = `${monthNames[month-1]} ${day}, ${year}`;
  // 处理时间段显示（如 "第3-4节" 或具体时刻）
  let periodCn = periodVal;
  if (!periodVal.includes("节")) {
    // 如果输入不包含“节”，则加上“第…节”作为提示（如仅写"3-4", 补充为"第3-4节"）
    periodCn = periodVal.match(/^\d/) ? `第${periodVal}节` : periodVal;
  }
  let periodEn = periodVal;
  if (periodVal.includes("第")) {
    // 如果教师直接输入中文"第3-4节"，去掉中文
    periodEn = periodVal.replace(/第|节/g, '');
    periodEn = periodEn.replace(/-/g, '–'); // 用–连接
    periodEn = `period ${periodEn}`;
  } else if (periodVal.match(/^\d/)) {
    // 若是 "3-4" 这样的格式
    periodEn = `period ${periodVal.replace(/-/g, '–')}`;
  } else {
    // 可能是具体时间，如 "10:00-11:30"
    periodEn = periodVal;
  }
  // 活动类别英文映射
  const typeEnMap = {"比赛":"competition", "演出":"performance", "讲座":"seminar", "其他":"activity"};
  const activityTypeEn = typeEnMap[activityType] || "activity";
  // 带队老师英文名
  const leaderTeacherEnObj = teachersList.find(t => t.cn === leaderTeacherCn);
  const leaderTeacherEn = leaderTeacherEnObj ? leaderTeacherEnObj.en : leaderTeacherCn;
  // 冲堂课程信息（中文和英文）
  let conflictTextCn = "";
  let conflictTextEn = "";
  if (conflictDiv.textContent && conflictDiv.textContent.startsWith("冲堂课程")) {
    // 直接使用页面上计算的冲堂结果
    conflictTextCn = conflictDiv.textContent.replace("冲堂课程：", "");
    // 将中文冲堂信息翻译/转化为英文
    // 冲堂信息格式如 "第3节 数学（陈俊宇），第4节 科学（郭珠玉）"
    const parts = conflictTextCn.split("，");
    const engList = parts.map(part => {
      // 提取节次、科目、教师
      const match = part.match(/^第(\d+)节\s*(\S+)（(.+)）$/);
      if (match) {
        let p = match[1];
        let subj = match[2];
        let teacherCn = match[3];
        // 科目简单翻译或使用拼音（可根据需要扩充）
        const subjMap = {"语文":"Chinese","英语":"English","数学":"Mathematics","科学":"Science",
                         "历史":"History","地理":"Geography","美术":"Art","体育":"P.E."};
        let subjEn = subjMap[subj] || subj;
        // 教师英文名
        let teacherEnObj = teachersList.find(t => t.cn === teacherCn);
        let teacherEnName = teacherEnObj ? teacherEnObj.en : teacherCn;
        return `Period ${p} ${subjEn} (${teacherEnName})`;
      } else {
        return part;
      }
    });
    conflictTextEn = engList.join(", ");
  }
  // 生成中文请假条文本
  let textCn = 
`${classNameCn} ${studentNameCn}（${studentNameEn}）因参加${activityType}“${activityName}”，需于${dateCn} ${periodCn}外出前往${place}参加活动，由${leaderTeacherCn}老师带队。`;
  if (conflictTextCn) {
    textCn += `请假期间冲堂课程：${conflictTextCn}。`;
  }
  textCn += "特此请假，望批准。\n\n";
  textCn += `申请老师：${leaderTeacherCn}    日期：${dateCn}`;
  // 生成英文请假条文本
  let textEn = 
`Student ${studentNameEn} of Class ${classNameCn} (${studentNameCn}) will be away on ${dateEn} during ${periodEn} to participate in a ${activityTypeEn} (“${activityName}”) at ${place}, led by ${leaderTeacherEn}.`;
  if (conflictTextEn) {
    textEn += ` The classes missed during this period are: ${conflictTextEn}.`;
  }
  textEn += " Kindly grant permission for this absence.\n\n";
  textEn += `Teacher in Charge: ${leaderTeacherEn}    Date: ${dateEn}`;
  return { chinese: textCn, english: textEn };
}

// 点击“生成请假条”按钮
genTextBtnEl.addEventListener('click', () => {
  const texts = createLeaveText();
  if (!texts) return;
  // 显示输出文本
  cnTextArea.value = texts.chinese;
  enTextArea.value = texts.english;
  outputSectionEl.style.display = 'block';
  // 生成 TXT 下载链接
  const blobCn = new Blob([texts.chinese], {type: 'text/plain'});
  downloadCnLink.href = URL.createObjectURL(blobCn);
  downloadCnLink.download = `${selectedStudent.cn}-请假条.txt`;
  const blobEn = new Blob([texts.english], {type: 'text/plain'});
  downloadEnLink.href = URL.createObjectURL(blobEn);
  downloadEnLink.download = `${selectedStudent.en}-LeaveLetter.txt`;
  downloadCnLink.style.display = 'inline';
  downloadEnLink.style.display = 'inline';
  downloadCnSep.style.display = 'inline';
});

// 点击“下载PDF通知”按钮
genPdfBtnEl.addEventListener('click', () => {
  const texts = createLeaveText();
  if (!texts) return;
  // 使用 jsPDF 生成 PDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("Helvetica"); // 设置字体
  doc.setFontSize(12);
  // 将中文文本按行分割写入PDF
  const cnLines = texts.chinese.split('\n');
  let y = 20;
  doc.text("请假通知（中文）", 10, y);
  y += 10;
  cnLines.forEach(line => {
    if (line.trim() !== "") {
      doc.text(line, 10, y);
    }
    y += 10;
  });
  // 英文文本
  doc.text("Leave Notification (English)", 10, y);
  y += 10;
  const enLines = texts.english.split('\n');
  enLines.forEach(line => {
    if (line.trim() !== "") {
      doc.text(line, 10, y);
    }
    y += 10;
  });
  // 保存 PDF，文件名包含学生姓名
  const fileName = `${selectedStudent.cn}-请假通知.pdf`;
  doc.save(fileName);
});