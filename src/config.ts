const MENUS = [
  {
    title: "회원",
    path: "/member",
    imgUrl: "/images/icons/sidebar/0-member.svg",
  },
  {
    title: "대시보드",
    path: "/dashboard",
    imgUrl: "/images/icons/sidebar/1-dash.svg",
  },
  {
    title: "학원 · 강사 관리",
    path: "/academy",
    imgUrl: "/images/icons/sidebar/2-academy.svg",
  },
  {
    title: "클래스 · 시간표 관리",
    path: "/class",
    imgUrl: "/images/icons/sidebar/3-class.svg",
  },
  {
    title: "내가 받은 소개",
    path: "/built",
    imgUrl: "/images/icons/sidebar/4-get-introduce.svg",
  },
  {
    title: "받은 소개 수수료",
    path: "/fee",
    imgUrl: "/images/icons/sidebar/5-get-introduce-fee.svg",
  },
  {
    title: "소개하기",
    path: "/build/step1",
    imgUrl: "/images/icons/sidebar/6-do-introduce.svg",
  },
  {
    title: "내가 한 소개",
    path: "/build",
    imgUrl: "/images/icons/sidebar/7-my-introduce.svg",
  },
  {
    title: "내가 한 소개 수수료",
    path: "/commission",
    imgUrl: "/images/icons/sidebar/8-my-introduce-fee.svg",
  },
  {
    title: "우리 지역 파트너",
    path: "/partners",
    imgUrl: "/images/icons/sidebar/9-partners.svg",
  },
  {
    title: "협업(미정)",
    path: "/cowork",
    imgUrl: "/images/icons/sidebar/10-cowork.svg",
  },
];
const PROFILE_MENUS = [
  { title: "수강생 프로필", url: "/my/profile" },
  { title: "구매 내역", url: "/my/purchase" },
  { title: "1:1 문의", url: "/my/contact" },
  { title: "회원정보 관리", url: "/my/info" },
];

const MAIN_POPOVER_MENUS = [{ title: "Home" }, { title: "Contact" }];
const POPOVER_MENUS = [
  { title: "로그아웃" },
  { title: "기타등등" },
  { title: "기타등등" },
  { title: "기타등등" },
];

export { MENUS, PROFILE_MENUS, MAIN_POPOVER_MENUS, POPOVER_MENUS };
